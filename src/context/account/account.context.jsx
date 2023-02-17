import { createContext, useState } from "react";
// import ACCOUNT_DATA from "../../accounts-data";

export const AccountContext = createContext({
  accountData: [],
  setAccountData: () => {},
});
export const AccountProvider = ({ children }) => {
  const [accountData, setAccountData] = useState([]);
  const value = { accountData, setAccountData };
  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
};
