import { Text } from './ErrorMsg.styled';
import massages from './massages';

const ErrorMsg = ({ name, fieldIsValid }) => {
  return (
    <Text>
      {fieldIsValid === 'isInvalid' && name === 'name' && massages.invalidName}
      {fieldIsValid === 'isInvalid' && name === 'email' && massages.invalidEmail}
      {fieldIsValid === 'isInvalid' &&
        name === 'password' &&
        massages.invalidPassword}
    </Text>
  );
};

export default ErrorMsg;
