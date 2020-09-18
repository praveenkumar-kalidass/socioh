import Joi from 'joi';

import { TRANSLATION } from '../../constant';

export const SCHEMA = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com'] } }),
  password: Joi.string().alphanum().min(6).max(15).required(),
});

export const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

export const FIELDS = [
  {
    key: 'name',
    label: TRANSLATION.YOUR_NAME,
    placeholder: TRANSLATION.NAME,
  },
  {
    key: 'email',
    label: TRANSLATION.YOUR_EMAIL,
    placeholder: TRANSLATION.EMAIL,
  },
  {
    key: 'password',
    label: TRANSLATION.CREATE_PASSWORD,
    placeholder: TRANSLATION.PASSWORD,
  },
];
