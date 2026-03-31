import { useState, createContext } from "react";
export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount((c) => c + 1);
  };

  const dec = () => {
    setCount((c) => c - 1);
  };

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };


  const handleDeleteUser = (id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  };
  return (
    <UserContext.Provider value={{ users, handleAddUser, handleDeleteUser, count, inc, dec }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
