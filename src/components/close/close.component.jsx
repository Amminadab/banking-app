import { useContext, useState } from "react";
import { AccountContext } from "../../context/account/account.context";
import { UserContext } from "../../context/user/user.context";

const Close = () => {
  const { setStatus, accountData } = useContext(AccountContext);
  const { user } = useContext(UserContext);
  const [inputValues, setInputValues] = useState({
    account: "",
    pin: "",
  });

  const { account, pin } = inputValues;

  const closeClickHandler = (e) => {
    e.preventDefault();

    const [accountToClose] = accountData.filter(
      (account) => account.accountNumber === user.accountNumber
    );

    if (account === "" || pin === "") {
      setStatus({
        type: "error",
        message: "The fields can't be empty and can't be alphabets characters",
      });
    }

    //check if the account number correct
  };

  const closeChangeHandler = (e) => {
    const { target } = e;
    const { name, value } = target;
    setInputValues({ ...inputValues, [name]: value });
  };
  return (
    <div className="processes">
      <h4>Close Account</h4>
      <div className="processes-detail">
        <label htmlFor="close-acc">Account</label>
        <input
          type="text"
          name="account"
          onChange={closeChangeHandler}
          id="close-acc"
        />
        <label htmlFor="close-pin">PIN</label>
        <input
          type="text"
          name="pin"
          onChange={closeChangeHandler}
          id="close-pin"
        />
        <button onClick={closeClickHandler}>Close</button>
      </div>
    </div>
  );
};

export default Close;
