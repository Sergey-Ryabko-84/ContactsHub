import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../components/Buttons/Button/Button';
import TextField from '../../components/TextField/TextField';
import fields from './fields';
import Loader from '../../components/Loader/Loader';
import useForm from '../../hooks/useForm';
import initialState from './initialState';
import { FormWrapper } from './RegisterForm.styled';
import { selectIsLoading } from '../../redux/auth/selectors';

const RegisterForm = ({ onSubmit, displaySpinner = false }) => {
  const isLoading = useSelector(selectIsLoading);
  const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
  const { name, email, password } = state;

  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  useEffect(() => {
    const emailRegexp =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    setIsNameValid(name.length > 1);
    setIsEmailValid(emailRegexp.test(email));
    setIsPasswordValid(password.length > 5);
  }, [name, email, password]);

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <TextField
        value={name}
        onChange={handleChange}
        isValid={isNameValid}
        {...fields.name}
      />
      <TextField
        value={email}
        onChange={handleChange}
        isValid={isEmailValid}
        {...fields.email}
      />
      <TextField
        value={password}
        onChange={handleChange}
        isValid={isPasswordValid}
        {...fields.password}
      />
      <Button
        disabled={isLoading || !isNameValid || !isEmailValid || !isPasswordValid}
      >
        {displaySpinner && (
          <Loader size={22} position="absolute" top="15px" left="96px" />
        )}
        Register
      </Button>
    </FormWrapper>
  );
};

export default RegisterForm;
