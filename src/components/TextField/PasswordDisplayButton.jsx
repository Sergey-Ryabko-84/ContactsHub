import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import { Button } from './PasswordDisplayButton.styled';

const PasswordDisplayButton = ({ inputType, inputTypeToggle }) => {
  return (
    <Button type="button" onClick={inputTypeToggle}>
      {inputType === 'password' ? (
        <HiOutlineEye size={22} color="#768088" />
      ) : (
        <HiOutlineEyeOff size={22} color="#768088" />
      )}
    </Button>
  );
};

export default PasswordDisplayButton;
