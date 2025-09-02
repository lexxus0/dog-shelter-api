import { Document } from 'mongoose';
export type DogDocument = Dog & Document;
export declare class Dog {
    name: string;
    gender: string;
    age: number;
    description: string;
    photoUrl: string;
    breed: string;
}
export declare const DogSchema: import("mongoose").Schema<Dog, import("mongoose").Model<Dog, any, any, any, Document<unknown, any, Dog, any, {}> & Dog & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Dog, Document<unknown, {}, import("mongoose").FlatRecord<Dog>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Dog> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
