import { useContext } from "react";
import { UserContext } from "../UserContextProvider";
const User = ({user, i,}) => {
  const {handleDeleteUser} = useContext(UserContext);
return (
    <li key={user.id}>
      <span>{i + 1}</span>
      <span>{ user.name}</span>
      <button onClick={() => handleDeleteUser(user.id)}>❌</button>
    </li>
  );
};

export default User;
