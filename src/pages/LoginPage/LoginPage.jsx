import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import LoginForm from '../../modules/LoginForm/LoginForm';
import GoogleButton from '../../components/Buttons/GoogleButton/GoogleButton';
import {
  AlternateWrapper,
  Divider,
  FormSection,
  Link,
  LogoIcon,
  LogoWrapper,
  PageWrapper,
  Span,
  Text,
  Title,
} from './LoginPage.styled';
import { selectIsLoading } from '../../redux/auth/selectors';
import { googleAuth, login } from '../../redux/auth/operations';
import ConnectionWaitingMsg from '../../components/ConnectionWaitingMsg/ConnectionWaitingMsg';

const LoginPage = () => {
  const location = useLocation();
  const [isGoogleLoading, setIsGoogleLoading] = useState(
    location.state?.isGoogleLoading ?? false
  );
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const onLogin = data => {
    dispatch(login(data))
      .unwrap()
      .then()
      .catch(error => {
        toast.error(
          'An error has occurred, please check the correctness of your login credentials.'
        );
      });
  };

  const onGoogleAuth = () => {
    setIsGoogleLoading(true);
    dispatch(googleAuth());
  };

  return (
    <PageWrapper>
      <FormSection>
        <LogoWrapper>
          <LogoIcon size={42} />
        </LogoWrapper>
        <Title>Welcome back</Title>
        <LoginForm
          onSubmit={onLogin}
          displaySpinner={isLoading && !isGoogleLoading}
        />
        <Text>
          Already have an account?{' '}
          <Link to="/auth/register" state={{ isGoogleLoading }}>
            Register
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
        <Link to="/auth/reset-password">Forgot password?</Link>
        {isLoading && <ConnectionWaitingMsg />}
      </FormSection>
    </PageWrapper>
  );
};

export default LoginPage;
