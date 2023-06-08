import { RotatingLines } from 'react-loader-spinner';
import { SpinnerWrapper } from './Loader.styled';

const Loader = ({
  size = '36',
  color = '#212735d0',
  position = 'static',
  top = 'auto',
  left = 'auto',
}) => (
  <SpinnerWrapper position={position} top={top} left={left}>
    <RotatingLines
      strokeColor={color}
      strokeWidth="5"
      animationDuration="0.75"
      width={size}
      visible={true}
    />
  </SpinnerWrapper>
);

export default Loader;
