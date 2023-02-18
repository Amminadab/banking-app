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

  const withdraw = (amount, user) => {
    const { accountNumber } = user;

    const newAccountData = accountData.map((account) =>
      account.accountNumber === accountNumber
        ? { ...account, transaction: [...account.transaction, -amount] }
        : account
    );
    setAccountData(newAccountData);
    console.log(newAccountData);

    // console.log(activeAccount);

    // const accountWithdraw = {...accountWithdraw , activeAccount.transaction.push(-amount)}
    // console.log(accountWithdraw);

    //addingthe

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
