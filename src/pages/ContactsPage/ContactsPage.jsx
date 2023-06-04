import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

const ContactsPage = () => {
    const dispatch = useDispatch();

  return (
    <>
      <p>ContactsPage</p>
      <button onClick={() => dispatch(logout())} type="button">
        LogOut
      </button>
    </>
  );
};

export default ContactsPage;
