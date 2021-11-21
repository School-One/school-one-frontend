import { useState } from 'react';

export const useForm = (form) => {
  const [state, setState] = useState(form);

  const onChange = (value, field) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return {
    ...state,
    formulario: state,
    onChange,
  };
};
