import { useState } from 'react';
import Icon from './Icon';
import { Input, InputWrapper } from './TextField.styled';
import PasswordDisplayButton from './PasswordDisplayButton';

const TextField = ({ ...props }) => {
  const [fieldType, setFieldType] = useState('password');
  const fieldTypeToggle = () => {
    setFieldType(state => (state === 'password' ? 'text' : 'password'));
  };

  return (
    <InputWrapper>
      <Input {...props} type={props.name === 'password' ? fieldType : props.type} />
      <Icon name={props.name} />
      {props.name === 'password' && (
        <PasswordDisplayButton
          inputType={fieldType}
          inputTypeToggle={fieldTypeToggle}
        />
      )}
    </InputWrapper>
  );
};

export default TextField;
