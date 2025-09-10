import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HelpRequest, HelpRequestDocument } from './schemas/help-request.schema';
import { Model } from 'mongoose';
import { CreateHelpRequestDto } from './dto/help-requests.dto';

@Injectable()
export class HelpRequestsService {
  constructor(@InjectModel(HelpRequest.name) private helpRequestModel: Model<HelpRequestDocument>) {}

  async create(dto: CreateHelpRequestDto) {
    const created = new this.helpRequestModel(dto);
    return created.save();
  }
}
