import Joi from 'joi';
import validateFields from './validateFields';

describe('validateFields', () => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
  });
  const initialState = {
    name: '',
  };

  it('should not throw validation error for name, if its value is empty', () => {
    const currentState = { name: '' };

    const result = validateFields(schema, currentState, initialState);

    expect(result).toStrictEqual({ name: '' });
  });

  it('should validate and return error for name, if its value is not empty and not valid', () => {
    const currentState = { name: 'Ab' };

    const result = validateFields(schema, currentState, initialState);

    expect(result).toStrictEqual({
      name: '"name" length must be at least 3 characters long',
    });
  });

  it('should validate and not return error for name, if its value is not empty and is valid', () => {
    const currentState = { name: 'Praveen' };

    const result = validateFields(schema, currentState, initialState);

    expect(result).toStrictEqual({ name: '' });
  });
});
