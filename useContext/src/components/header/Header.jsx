import "./Header.css";
import { useContext } from "react";
import { UserContext } from "../UserContextProvider";
const Header = () => {
  const {users} = useContext(UserContext)
  const usersCount = users.length;
  return (
    <header>
      <p>
        users: <span>{usersCount}</span>
      </p>
    </header>
  );
};

export default Header;
