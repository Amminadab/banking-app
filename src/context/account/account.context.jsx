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

  //withdraw handler
  const withdraw = (amount, user) => {
    const { accountNumber } = user;

    const newAccountData = accountData.map((account) =>
      account.accountNumber === accountNumber
        ? { ...account, transaction: [...account.transaction, -amount] }
        : account
    );
    setAccountData(newAccountData);
    setStatus({
      type: "success",
      message: `Successfully Withdraw ${amount} Birr`,
    });
  };
  //transfer handler
  const transfer = (amount, user, acc) => {
    //    console.log(amount, user, account);
    const { accountNumber } = user;

    const newAccountData = accountData.map((account) => {
      if (account.accountNumber === accountNumber) {
        return { ...account, transaction: [...account.transaction, -amount] };
      } else if (account.accountNumber === String(acc)) {
        return { ...account, transaction: [...account.transaction, amount] };
      } else {
        return { ...account };
      }
    });
    setAccountData(newAccountData);
    setStatus({
      type: "success",
      message: `Successfully Transferred ${amount} Birr`,
    });
  };

  //loan handler
  const loan = (amount, user) => {
    const newAccountData = accountData.map((account) =>
      account.accountNumber === user.accountNumber
        ? { ...account, transaction: [...account.transaction, Number(amount)] }
        : { ...account }
    );
    setAccountData(newAccountData);
    setStatus({
      type: "success",
      message: `Successful loan of ${amount} Birr`,
    });
  };

  //close handler
  const close = (user) => {
    const closed = "closed";
    const newAccountData = accountData.map((account) => {
      if (user.accountNumber === account.accountNumber) {
        return { ...account, state: closed };
      } else {
        return { ...account };
      }
    });

    setAccountData(newAccountData);
  };

  const value = {
    accountData,
    setAccountData,
    withdraw,
    transfer,
    loan,
    close,
    status,
    setStatus,
  };
  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
};
