import { HiOutlineCheck, HiOutlineExclamationCircle } from 'react-icons/hi';
import { IconWrapper } from './ValidationIcon.styled';

const ValidationIcon = ({ fieldIsValid }) => {
  return (
    <IconWrapper>
      {fieldIsValid === 'isValid' && <HiOutlineCheck size={22} color="#00BC65" />}
      {fieldIsValid === 'isInvalid' && (
        <HiOutlineExclamationCircle size={22} color="#e74a3b" />
      )}
    </IconWrapper>
  );
};

export default ValidationIcon;
