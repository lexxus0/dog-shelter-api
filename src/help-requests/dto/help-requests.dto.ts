import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateHelpRequestDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  fullName: string;

  @IsEnum(['Фінансова допомога', 'Волонтерство', 'Інше'] as const)
  helpType: 'Фінансова допомога' | 'Волонтерство' | 'Інше';

  @IsEmail()
  email: string;

  @IsEnum(['Електронна пошта', 'Телефон'] as const)
  preferredContact: 'Електронна пошта' | 'Телефон';

  @IsOptional()
  @IsPhoneNumber('UA', { message: 'Вкажіть номер у міжнародному форматі, напр. +380...' })
  phone?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  comment?: string;

  @IsBoolean()
  agree: boolean;
}
