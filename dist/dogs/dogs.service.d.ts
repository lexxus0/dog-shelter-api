import { Model } from 'mongoose';
import { Dog, DogDocument } from './dogs.schema';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
export declare class DogsService {
    private dogModel;
    private readonly cloudinaryService;
    constructor(dogModel: Model<DogDocument>, cloudinaryService: CloudinaryService);
    create(dogData: Partial<Dog>, files?: Express.Multer.File[]): Promise<Dog>;
    findAll(breed?: string, page?: number, limit?: number): Promise<{
        data: Dog[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: string): Promise<Dog>;
    update(id: string, updateData: Partial<Dog>): Promise<Dog>;
    remove(id: string): Promise<Dog>;
}
