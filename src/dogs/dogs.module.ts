// dogs.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';
import { Dog, DogSchema } from './dogs.schema';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Dog.name, schema: DogSchema }]), CloudinaryModule],
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}
