import { Controller, Get, Post, Body, Param, Delete, Put, Query, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { DogsService } from './dogs.service';
import { Dog } from './dogs.schema';
import type { Express } from 'express';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files', 3)) // ✅ приймаємо масив файлів, максимум 3
  create(@Body() dogData: Partial<Dog>, @UploadedFiles() files?: Express.Multer.File[]) {
    return this.dogsService.create(dogData, files);
  }

  @Get()
  findAll(@Query('breed') breed?: string, @Query('page') page = '1', @Query('limit') limit = '10') {
    return this.dogsService.findAll(breed, Number(page), Number(limit));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dogsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<Dog>) {
    return this.dogsService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dogsService.remove(id);
  }
}
