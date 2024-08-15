import { createContext, useState } from "react";
export const userContext = createContext();

const Context = (props) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      email: "john@gmail.com",
      username: "johnd",
      password: "m38rmF$",
    },
    {
      id: 2,
      email: "morrison@gmail.com",
      username: "mor_2314",
      password: "83r5^_",
    },
    {
      id: 3,
      email: "kevin@gmail.com",
      username: "kevinryan",
      password: "kev02937@",
    },
  ]);

  return (
    <userContext.Provider value={{ users, setUsers }}>
      {props.children}
    </userContext.Provider>
  );
};

export default Context;
