import Joi from 'joi';

import { TRANSLATION } from '../../constant';

export const SCHEMA = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com'] } }),
  password: Joi.string().alphanum().min(6).max(15).required(),
});

export const INITIAL_STATE = {
  email: '',
  password: '',
};

export const FIELDS = [
  {
    key: 'email',
    label: TRANSLATION.YOUR_EMAIL,
    placeholder: TRANSLATION.EMAIL,
  },
  {
    key: 'password',
    label: TRANSLATION.YOUR_PASSWORD,
    placeholder: TRANSLATION.PASSWORD,
  },
];
