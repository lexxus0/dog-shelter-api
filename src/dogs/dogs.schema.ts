import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DogDocument = Dog & Document;

@Schema()
export class Dog {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, enum: ['male', 'female'] })
  gender: string;

  @Prop({ required: true })
  age: number;

  @Prop()
  description: string;

  @Prop()
  photoUrl: string;

  @Prop()
  breed: string;
}

export const DogSchema = SchemaFactory.createForClass(Dog);
