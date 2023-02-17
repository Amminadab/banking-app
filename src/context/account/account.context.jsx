import { createContext, useState } from "react";
// import ACCOUNT_DATA from "../../accounts-data";

export const AccountContext = createContext({
  accountData: [],
  setAccountData: () => {},
  transfer: () => {},
  withdraw: () => {},
  loan: () => {},
  close: () => {},

  status: {
    type: "",
    message: "",
  },
});
export const AccountProvider = ({ children }) => {
  const [accountData, setAccountData] = useState([]);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const withdraw = (amount) => {
    console.log(amount);
    //find the active user
  };
  const value = {
    accountData,
    setAccountData,
    withdraw,
    status,
    setStatus,
  };
  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
};
