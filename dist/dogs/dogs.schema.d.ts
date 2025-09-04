import { Document } from 'mongoose';
export type DogDocument = Dog & Document;
export declare class Dog {
    name: string;
    gender: string;
    age: number;
    weight: number;
    description: string;
    breed: string;
    photoUrl1: string;
    photoUrl2: string;
    photoUrl3: string;
    emotionalStability: number;
    obedience: number;
    healthCondition: number;
    socialization: number;
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
