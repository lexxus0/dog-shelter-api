import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dog, DogDocument } from './dogs.schema';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class DogsService {
  constructor(
    @InjectModel(Dog.name) private dogModel: Model<DogDocument>,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async create(dogData: Partial<Dog>, files?: Express.Multer.File[]): Promise<Dog> {
    let photoUrl1: string | undefined;
    let photoUrl2: string | undefined;
    let photoUrl3: string | undefined;

    if (files && files.length > 0) {
      const uploads = await Promise.all(files.map((file) => this.cloudinaryService.uploadImage(file)));

      photoUrl1 = uploads[0]?.secure_url;
      photoUrl2 = uploads[1]?.secure_url;
      photoUrl3 = uploads[2]?.secure_url;
    }

    const newDog = new this.dogModel({
      ...dogData,
      photoUrl1,
      photoUrl2,
      photoUrl3,
    });

    return newDog.save();
  }

  async findAll(
    breed?: string,
    page = 1,
    limit = 10,
  ): Promise<{ data: Dog[]; total: number; page: number; limit: number }> {
    const filter = breed ? { breed } : {};
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.dogModel.find(filter).skip(skip).limit(limit).exec(),
      this.dogModel.countDocuments(filter).exec(),
    ]);

    return { data, total, page, limit };
  }

  async findOne(id: string): Promise<Dog> {
    const dog = await this.dogModel.findById(id).exec();
    if (!dog) throw new NotFoundException(`Dog with id ${id} not found`);
    return dog;
  }

  async update(id: string, updateData: Partial<Dog>): Promise<Dog> {
    const dog = await this.dogModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
    if (!dog) throw new NotFoundException(`Dog with id ${id} not found`);
    return dog;
  }

  async remove(id: string): Promise<Dog> {
    const dog = await this.dogModel.findByIdAndDelete(id).exec();
    if (!dog) throw new NotFoundException(`Dog with id ${id} not found`);
    return dog;
  }
}
