import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { Dog } from './dogs.schema';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Post()
  create(@Body() dogData: Partial<Dog>) {
    return this.dogsService.create(dogData);
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
