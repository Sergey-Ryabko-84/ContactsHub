import Button from '../../components/Button/Button';
import TextField from '../../components/TextField/TextField';
import useForm from '../../hooks/useForm';
import fields from './fields';
import initialState from './initialState';

const LoginForm = () => {
  const onSubmit = data => console.log(data);
  const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit}>
      <TextField value={email} onChange={handleChange} {...fields.email} />
      <TextField value={password} onChange={handleChange} {...fields.password} />
      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;
