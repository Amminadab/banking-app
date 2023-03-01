import { useContext, useState } from "react";
import { AccountContext } from "../../context/account/account.context";
import { UserContext } from "../../context/user/user.context";

const Transfer = ({ balance }) => {
  const { setStatus, accountData, transfer } = useContext(AccountContext);
  const { user } = useContext(UserContext);

  const [inputValues, setInputValues] = useState({
    account: "",
    amount: "",
  });

  const { account, amount } = inputValues;

  const transferClickHandler = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);

    const [accountToTransferTo] = accountData.filter((accountTo) => {
      return accountTo.accountNumber === String(account);
    });

    // empty field control
    if (account === "" || amount === "") {
      setStatus({
        type: "error",
        message:
          "The fields can't be empty and they can't include alphabetic characters",
      });
    }
    // the account to sent to is your ouw account
    else if (String(account) === user.accountNumber) {
      setStatus({
        type: "error",
        message: "You can not transfer money to yourself",
      });
    }
    // the account to sent to is valid
    else if (!accountToTransferTo) {
      setStatus({ type: "error", message: "Invalid Account Number" });
    }
    // the amount is the account is less that the transfer
    else if (balance < amount) {
      setStatus({
        type: "error",
        message: "Your balance is lower than the amount you want to Transfer",
      });
    }
    // the amount is less than 100
    else if (100 > amount) {
      setStatus({
        type: "error",
        message: "You can not Transfer less than 100 Birr",
      });
    }

    // if valid
    else if (accountToTransferTo && 100 < amount < balance) {
      transfer(amount, user, account);

      setInputValues({ account: "", amount: "" });
    } else {
      setStatus({ type: "error", message: "something went wrong" });
    }
  };

  const inputChangeHandler = (e) => {
    const { target } = e;
    const { name, value } = target;

    if (value === "") {
      setInputValues({ ...inputValues, [name]: value });
    } else {
      setInputValues({ ...inputValues, [name]: Number(value) });
    }
  };

  return (
    <div className="processes transfer">
      <h4>Transfer TO Account</h4>
      <div className="processes-detail">
        <label htmlFor="transfer-acc">Account</label>
        <input
          type="number"
          name="account"
          onChange={inputChangeHandler}
          id="transfer-acc"
          value={inputValues.account}
        />
        <label htmlFor="transfer-amm">Amount</label>
        <input
          type="number"
          name="amount"
          onChange={inputChangeHandler}
          id="transfer-amm"
          value={inputValues.amount}
        />
        <button onClick={transferClickHandler}>Transfer</button>
      </div>
    </div>
  );
};

export default Transfer;
