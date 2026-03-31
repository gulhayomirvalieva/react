import { useRef, useContext } from "react";
import "./Form.css";
import { UserContext } from "../UserContextProvider";
const Form = () => {
  const {handleAddUser} = useContext(UserContext);

  const nameInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      name: nameInputRef.current.value,
    };
    handleAddUser(newUser);
    nameInputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" ref={nameInputRef} required />
      <button>Add</button>
    </form>
  );
};

export default Form;
