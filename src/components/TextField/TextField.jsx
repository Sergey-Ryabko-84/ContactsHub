import { useEffect, useState } from 'react';
import Icon from './Icon/Icon';
import PasswordDisplayButton from './PasswordDisplayButton/PasswordDisplayButton';
import ValidationIcon from './ValidationIcon/ValidationIcon';
import { Input, InputWrapper } from './TextField.styled';

const TextField = ({ ...props }) => {
  const [fieldIsValid, setFieldIsValid] = useState(null);
  const [outlineColor, setOutlineColor] = useState('#76808888');
  const [fieldType, setFieldType] = useState('password');
  const fieldTypeToggle = () => {
    setFieldType(state => (state === 'password' ? 'text' : 'password'));
  };

  useEffect(() => {
    if (props.value === '') {
      setFieldIsValid(null);
      setOutlineColor('#76808888');
    } else if (props.isValid) {
      setFieldIsValid('isValid');
      setOutlineColor('#00BC6588');
    } else if (!props.isValid) {
      setFieldIsValid('isInvalid');
      setOutlineColor('#e74a3b88');
    }
  }, [props.isValid, props.value]);

  return (
    <InputWrapper>
      <Input
        {...props}
        type={props.name === 'password' ? fieldType : props.type}
        color={outlineColor}
      />
      <Icon name={props.name} />
      {props.name === 'password' && (
        <PasswordDisplayButton
          inputType={fieldType}
          inputTypeToggle={fieldTypeToggle}
        />
      )}
      <ValidationIcon fieldIsValid={fieldIsValid} />
    </InputWrapper>
  );
};

export default TextField;
