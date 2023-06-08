import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../../modules/LoginForm/LoginForm';
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
} from './LoginPage.styled';
import { selectIsLoading } from '../../redux/auth/selectors';
import { googleAuth, login } from '../../redux/auth/operations';

const LoginPage = () => {
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const onLogin = data => {
    dispatch(login(data));
  };

  const onGoogleAuth = () => {
    setIsGoogleLoading(true);
    dispatch(googleAuth());
  };

  return (
    <PageWrapper>
      <FormSection>
        <LogoIcon size={42} />
        <Title>Welcome back</Title>
        <LoginForm
          onSubmit={onLogin}
          displaySpinner={isLoading && !isGoogleLoading}
        />
        <Text>
          Already have an account? <Link to="/auth/register">Register</Link>
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
      </FormSection>
    </PageWrapper>
  );
};

export default LoginPage;
