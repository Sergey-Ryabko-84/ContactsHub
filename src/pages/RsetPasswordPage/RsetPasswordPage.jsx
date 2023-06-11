import {
  FormSection,
  Link,
  LogoIcon,
  LogoWrapper,
  PageWrapper,
  Text,
  Title,
} from './RsetPasswordPage.styled';

const RsetPasswordPage = () => {
  return (
    <PageWrapper>
      <FormSection>
        <LogoWrapper>
          <LogoIcon size={42} />
        </LogoWrapper>
        <Title>Reset your password</Title>
        <Text>Enter your email address and we will send you a new password.</Text>
        <form />
        <Link to="/auth/login">Back to Apps Client</Link>
      </FormSection>
    </PageWrapper>
  );
};

export default RsetPasswordPage;
