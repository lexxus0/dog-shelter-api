import { HelpRequestsService } from './help-requests.service';
import { CreateHelpRequestDto } from './dto/help-requests.dto';
export declare class HelpRequestsController {
    private readonly service;
    constructor(service: HelpRequestsService);
    create(dto: CreateHelpRequestDto): Promise<{
        id: unknown;
        message: string;
        createdAt: Date | undefined;
    }>;
}
