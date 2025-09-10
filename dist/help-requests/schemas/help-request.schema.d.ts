import { Document } from 'mongoose';
export type HelpRequestDocument = HelpRequest & Document;
export declare class HelpRequest {
    fullName: string;
    helpType: 'Фінансова допомога' | 'Волонтерство' | 'Інше';
    email: string;
    preferredContact: 'Електронна пошта' | 'Телефон';
    phone?: string;
    comment?: string;
    agree: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare const HelpRequestSchema: import("mongoose").Schema<HelpRequest, import("mongoose").Model<HelpRequest, any, any, any, Document<unknown, any, HelpRequest, any, {}> & HelpRequest & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, HelpRequest, Document<unknown, {}, import("mongoose").FlatRecord<HelpRequest>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<HelpRequest> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
