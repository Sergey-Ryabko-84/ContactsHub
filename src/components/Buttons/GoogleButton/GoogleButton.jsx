import { useSelector } from 'react-redux';
import Loader from '../../Loader/Loader';
import { Button, ButtonLink, ButtonTitle, GoogleIcon } from './GoogleButton.styled';
import { selectIsLoading } from '../../../redux/auth/selectors';

const GoogleButton = ({ type = 'button', onClick, displaySpinner = false }) => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <Button type={type} onClick={onClick} disabled={isLoading}>
      <ButtonLink href={`${process.env.REACT_APP_API_URL}/api/auth/google`}>
        {displaySpinner ? (
          <Loader size={22} position="absolute" />
        ) : (
          <GoogleIcon size={22} loading={isLoading.toString()} />
        )}
        <ButtonTitle>Continue with Google</ButtonTitle>
      </ButtonLink>
    </Button>
  );
};

export default GoogleButton;
