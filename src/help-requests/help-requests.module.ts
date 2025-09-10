import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HelpRequest, HelpRequestSchema } from './schemas/help-request.schema';
import { HelpRequestsService } from './help-requests.service';
import { HelpRequestsController } from './help-requests.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: HelpRequest.name, schema: HelpRequestSchema, collection: 'help_requests' }]),
  ],
  controllers: [HelpRequestsController],
  providers: [HelpRequestsService],
})
export class HelpRequestsModule {}
