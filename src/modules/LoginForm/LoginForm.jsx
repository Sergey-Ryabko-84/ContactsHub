import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../components/Buttons/Button/Button';
import TextField from '../../components/TextField/TextField';
import fields from './fields';
import Loader from '../../components/Loader/Loader';
import useForm from '../../hooks/useForm';
import initialState from './initialState';
import { FormWrapper } from './LoginForm.styled';
import { selectIsLoading } from '../../redux/auth/selectors';

const LoginForm = ({ onSubmit, displaySpinner = false }) => {
  const isLoading = useSelector(selectIsLoading);
  const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
  const { email, password } = state;

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  useEffect(() => {
    const emailRegexp =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    setIsEmailValid(emailRegexp.test(email));
    setIsPasswordValid(password.length > 5);
  }, [email, password]);

  return (
    <FormWrapper onSubmit={handleSubmit}>
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
      <Button disabled={isLoading || !isEmailValid || !isPasswordValid}>
        {displaySpinner && (
          <Loader size={22} position="absolute" top="15px" left="96px" />
        )}
        Login
      </Button>
    </FormWrapper>
  );
};

export default LoginForm;
