const validateFields = (schema, state, initialState) => {
  const { error } = schema.validate(state, { abortEarly: false });
  if (error?.details) {
    return error.details.reduce(
      (result, item) => {
        if (state[item.context.key]) {
          return {
            ...result,
            [item.context.key]: item.message,
          };
        }
        return {
          ...result,
          [item.context.key]: '',
        };
      },
      {
        name: '',
        email: '',
        password: '',
      },
    );
  }
  return initialState;
};

export default validateFields;
