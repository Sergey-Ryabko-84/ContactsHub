import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import ResetPasswordForm from '../../modules/ResetPasswordForm/ResetPasswordForm';
import {
  FormSection,
  Link,
  LogoIcon,
  LogoWrapper,
  PageWrapper,
  Text,
  Title,
} from './ResetPasswordPage.styled';
import { selectIsLoading } from '../../redux/auth/selectors';
import { resetPass } from '../../redux/auth/operations';
import ConnectionWaitingMsg from '../../components/ConnectionWaitingMsg/ConnectionWaitingMsg';

const ResetPasswordPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const onResetPassword = data => {
    dispatch(resetPass(data))
      .unwrap()
      .then()
      .catch(error => {
        console.dir(error);
        toast.error(`${error.message}`);
      });
  };

  return (
    <PageWrapper>
      <FormSection>
        <LogoWrapper>
          <LogoIcon size={42} />
        </LogoWrapper>
        <Title>Reset your password</Title>
        <Text>Enter your email address and we will send you a new password.</Text>
        <ResetPasswordForm onSubmit={onResetPassword} />
        <Link to="/auth/login">Back to Login</Link>
        {isLoading && <ConnectionWaitingMsg />}
      </FormSection>
    </PageWrapper>
  );
};

export default ResetPasswordPage;
