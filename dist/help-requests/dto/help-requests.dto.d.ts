export declare class CreateHelpRequestDto {
    fullName: string;
    helpType: 'Фінансова допомога' | 'Волонтерство' | 'Інше';
    email: string;
    preferredContact: 'Електронна пошта' | 'Телефон';
    phone?: string;
    comment?: string;
    agree: boolean;
}
