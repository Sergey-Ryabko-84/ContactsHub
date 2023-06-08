import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

const RegisterPage = () => {
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const onRegister = data => {
    dispatch(register(data));
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
          Already have an account? <Link to="/auth/login">Log in</Link>
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

export default RegisterPage;
