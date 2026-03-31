import { useContext } from "react";
import { UserContext } from "../UserContextProvider";
import "./UserList.css";
import User from "./User";
const UserList = () => {
  const {users} = useContext(UserContext);
  return (
    <section>
      <h1>User List</h1>

      {users.length == 0 && (
        <h2 style={{textAlign: "center"}}> There is no user</h2>
      )}


      {users.length > 0 && (
        <ul>
          {users.map((user, i) => {
            return (
              <User
                user={user}
                i={i}
                key={user.id}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default UserList;
