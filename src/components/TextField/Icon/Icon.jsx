import { HiOutlineUser, HiOutlineMail, HiOutlineKey } from 'react-icons/hi';
import { IconWrapper } from './Icon.styled';

const Icon = ({ name }) => {
  return (
    <IconWrapper>
      {name === 'name' && <HiOutlineUser size={22} color="#768088" />}
      {name === 'email' && <HiOutlineMail size={22} color="#768088" />}
      {name === 'password' && <HiOutlineKey size={22} color="#768088" />}
    </IconWrapper>
  );
};

export default Icon;
