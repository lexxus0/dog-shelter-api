// src/cloudinary/cloudinary.service.ts
import { Injectable } from '@nestjs/common';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  async uploadImage(file: Express.Multer.File): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      const upload = cloudinary.uploader.upload_stream({ folder: 'dogs' }, (error, result) => {
        if (error || !result) return reject(error);
        resolve(result);
      });
      upload.end(file.buffer); // ✅ напряму пишемо buffer
    });
  }
}
