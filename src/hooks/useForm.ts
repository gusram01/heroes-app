import { ChangeEvent, useState } from 'react';

interface Initial {
  search?: string;
}

export function useForm(initialState: Initial = {
  search:''
}) {

  const [values, setValues] = useState(initialState);

  const reset = () => setValues(initialState);

  function handleInputChange({ target }: ChangeEvent<HTMLInputElement>) {
    setValues({
      ...values,
      [target.name]: target.value
    });
  };

  return { values, handleInputChange, reset };
};
