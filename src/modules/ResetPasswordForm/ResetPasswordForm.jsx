import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../components/Buttons/Button/Button';
import TextField from '../../components/TextField/TextField';
import fields from './fields';
import Loader from '../../components/Loader/Loader';
import useForm from '../../hooks/useForm';
import initialState from './initialState';
import { FormWrapper } from './ResetPasswordForm.styled';
import { selectIsLoading } from '../../redux/auth/selectors';

const ResetPasswordForm = ({ onSubmit }) => {
  const isLoading = useSelector(selectIsLoading);
  const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
  const { email } = state;

  const [isEmailValid, setIsEmailValid] = useState(false);

  useEffect(() => {
    const emailRegexp =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    setIsEmailValid(emailRegexp.test(email));
  }, [email]);

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <TextField
        value={email}
        onChange={handleChange}
        isValid={isEmailValid}
        {...fields.email}
      />
      <Button disabled={isLoading || !isEmailValid}>
        {isLoading && <Loader size={22} position="absolute" top="15px" left="96px" />}
        Continue
      </Button>
    </FormWrapper>
  );
};

export default ResetPasswordForm;
