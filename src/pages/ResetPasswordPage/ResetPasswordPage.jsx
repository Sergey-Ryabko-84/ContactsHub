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
import { useNavigate } from 'react-router-dom';

const ResetPasswordPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onResetPassword = data => {
    const email = data.email
    dispatch(resetPass(data))
      .unwrap()
      .then((data) => {
        toast.success(`${data.message}`);
        navigate('/auth/check-email', { state: {email} });
      })
      .catch(error => {
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
