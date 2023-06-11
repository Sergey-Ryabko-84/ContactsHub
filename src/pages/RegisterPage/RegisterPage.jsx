import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import RegisterForm from '../../modules/RegisterForm/RegisterForm';
import GoogleButton from '../../components/Buttons/GoogleButton/GoogleButton';
import {
  AlternateWrapper,
  Divider,
  FormSection,
  Link,
  LogoIcon,
  PageWrapper,
  Span,
  Text,
  Title,
} from './RegisterPage.styled';
import { selectIsLoading } from '../../redux/auth/selectors';
import { googleAuth, register } from '../../redux/auth/operations';
import ConnectionWaitingMsg from '../../components/ConnectionWaitingMsg/ConnectionWaitingMsg';

const RegisterPage = () => {
  const location = useLocation();
  const [isGoogleLoading, setIsGoogleLoading] = useState(
    location.state?.isGoogleLoading ?? false
  );
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const onRegister = data => {
    dispatch(register(data))
      .unwrap()
      .then(({ user }) => {
        toast.success(`Welcome, ${user.name}!`);
      })
      .catch(error => {
        toast.error(`Error: ${error.message}`);
      });;
  };

  const onGoogleAuth = () => {
    setIsGoogleLoading(true);
    dispatch(googleAuth());
  };

  return (
    <PageWrapper>
      <FormSection>
        <LogoIcon size={42} />
        <Title>Create your account</Title>
        <RegisterForm
          onSubmit={onRegister}
          displaySpinner={isLoading && !isGoogleLoading}
        />
        <Text>
          Already have an account?{' '}
          <Link to="/auth/login" state={{ isGoogleLoading }}>
            Log in
          </Link>
        </Text>
        <Divider>
          <Span>or</Span>
        </Divider>
        <AlternateWrapper>
          <GoogleButton
            onClick={onGoogleAuth}
            displaySpinner={isLoading && isGoogleLoading}
          />
        </AlternateWrapper>
        {isLoading && <ConnectionWaitingMsg />}
      </FormSection>
    </PageWrapper>
  );
};

export default RegisterPage;
