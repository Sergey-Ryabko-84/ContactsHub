import { ThreeDots } from 'react-loader-spinner';
import { MsgWrapper } from './ConnectionWaitingMsg.styled';

const ConnectionWaitingMsg = () => {
  return (
    <MsgWrapper>
      <p>Server connection waiting</p>
      <ThreeDots
        height="6"
        width="22"
        radius="9"
        color="#272a30e0"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </MsgWrapper>
  );
};

export default ConnectionWaitingMsg;
