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
  weight: number;

  @Prop()
  description: string;

  @Prop()
  breed: string;

  @Prop()
  photoUrl1: string;

  @Prop()
  photoUrl2: string;

  @Prop()
  photoUrl3: string;

  @Prop({ min: 0, max: 10 })
  emotionalStability: number;

  @Prop({ min: 0, max: 10 })
  obedience: number;

  @Prop({ min: 0, max: 10 })
  healthCondition: number;

  @Prop({ min: 0, max: 10 })
  socialization: number;
}

export const DogSchema = SchemaFactory.createForClass(Dog);
