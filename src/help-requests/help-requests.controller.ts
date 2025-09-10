// src/help-requests/help-requests.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { HelpRequestsService } from './help-requests.service';
import { CreateHelpRequestDto } from './dto/help-requests.dto';

@Controller('help-requests')
export class HelpRequestsController {
  constructor(private readonly service: HelpRequestsService) {}

  @Post()
  async create(@Body() dto: CreateHelpRequestDto) {
    const record = await this.service.create(dto);
    return {
      id: record._id,
      message: 'Дякуємо! Заявку отримано.',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      createdAt: record.createdAt,
    };
  }
}
