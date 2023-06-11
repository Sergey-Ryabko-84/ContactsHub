import { toast, Toaster, ToastBar, useToaster } from 'react-hot-toast';
import { HiOutlineX } from 'react-icons/hi';
import { CloseButton } from './Notifications.styled';

const Notifications = () => {
  const { handlers } = useToaster();
  const { startPause, endPause } = handlers;

  return (
    <Toaster
      toastOptions={{
        style: {
          maxWidth: '380px',
        },
        error: {
          iconTheme: {
            primary: '#e74a3b',
            secondary: '#fff',
          },
        },
      }}
      onMouseEnter={startPause}
      onMouseLeave={endPause}
    >
      {t => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <>
              {icon}
              {message}
              {t.type !== 'loading' && (
                <CloseButton onClick={() => toast.dismiss(t.id)}>
                  <HiOutlineX size={16} color="#272A3099" />
                </CloseButton>
              )}
            </>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};

export default Notifications;
