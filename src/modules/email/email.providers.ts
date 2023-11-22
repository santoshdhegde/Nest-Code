import { Email } from './email.entity';
import { EMAIL_REPOSITORY } from '../../core/constants';

export const emailProviders = [
    {
        provide: EMAIL_REPOSITORY,
        useValue: Email,
    },
];
