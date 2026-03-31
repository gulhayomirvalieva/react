import { useContext } from "react";
import { UserContext } from "./UserContextProvider";

const center = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: "20px",
  backgroundColor: "lightgray",
  gap: "20px",
};
const Counter = () => {
  const { count, inc, dec } = useContext(UserContext);
  return (
    <div style={center}>
      <button onClick={dec}>-</button>
      <span>{count}</span>
      <button onClick={inc}>+</button>
    </div>
  );
};

export default Counter;
