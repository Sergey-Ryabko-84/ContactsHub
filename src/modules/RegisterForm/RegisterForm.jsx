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

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <TextField value={name} onChange={handleChange} {...fields.name} />
      <TextField value={email} onChange={handleChange} {...fields.email} />
      <TextField value={password} onChange={handleChange} {...fields.password} />
      <Button disabled={isLoading}>
        {displaySpinner && (
          <Loader size={22} position="absolute" top="15px" left="96px" />
        )}
        Register
      </Button>
    </FormWrapper>
  );
};

export default RegisterForm;
