import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HelpRequestDocument = HelpRequest & Document;

@Schema({ timestamps: true })
export class HelpRequest {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true, enum: ['Фінансова допомога', 'Волонтерство', 'Інше'] })
  helpType: 'Фінансова допомога' | 'Волонтерство' | 'Інше';

  @Prop({ required: true, lowercase: true, trim: true })
  email: string;

  @Prop({ required: true, enum: ['Електронна пошта', 'Телефон'] })
  preferredContact: 'Електронна пошта' | 'Телефон';

  @Prop({ required: false })
  phone?: string;

  @Prop({ required: false })
  comment?: string;

  @Prop({ required: true, default: false })
  agree: boolean;

  @Prop({ type: Date })
  createdAt?: Date;

  @Prop({ type: Date })
  updatedAt?: Date;
}

export const HelpRequestSchema = SchemaFactory.createForClass(HelpRequest);
