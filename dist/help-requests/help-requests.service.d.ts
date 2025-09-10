import { HelpRequest, HelpRequestDocument } from './schemas/help-request.schema';
import { Model } from 'mongoose';
import { CreateHelpRequestDto } from './dto/help-requests.dto';
export declare class HelpRequestsService {
    private helpRequestModel;
    constructor(helpRequestModel: Model<HelpRequestDocument>);
    create(dto: CreateHelpRequestDto): Promise<import("mongoose").Document<unknown, {}, HelpRequestDocument, {}, {}> & HelpRequest & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
