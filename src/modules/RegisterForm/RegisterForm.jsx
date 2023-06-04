import { useDispatch } from 'react-redux';
import Button from '../../components/Button/Button';
import TextField from '../../components/TextField/TextField';
import useForm from '../../hooks/useForm';
import fields from './fields';
import initialState from './initialState';
import { register } from '../../redux/auth/operations';
import { FormWrapper } from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch()

  const onSubmit = data => {
    dispatch(register(data))
  }
  const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
  const { name, email, password } = state;

  return (
    <>
      <FormWrapper onSubmit={handleSubmit}>
        <TextField value={name} onChange={handleChange} {...fields.name} />
        <TextField value={email} onChange={handleChange} {...fields.email} />
        <TextField value={password} onChange={handleChange} {...fields.password} />
        <Button>Register</Button>
      </FormWrapper>
    </>
  );
};

export default RegisterForm;
