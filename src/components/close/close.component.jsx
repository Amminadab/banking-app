import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { AccountContext } from "../../context/account/account.context";
import { UserContext } from "../../context/user/user.context";

const Close = () => {
  const { setStatus, accountData, close } = useContext(AccountContext);
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
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
    else if (account !== Number(accountToClose.accountNumber)) {
      setStatus({
        type: "error",
        message: "Account number doesn't match with Your's",
      });
    }
    //checking if password match
    else if (pin !== Number(accountToClose.pin)) {
      setStatus({
        type: "error",
        message: "Account password doesn't match ",
      });
    } else if (
      pin === Number(accountToClose.pin) &&
      account === Number(accountToClose.accountNumber)
    ) {
      close(user);
      setUser(null);
      navigate("/");
    }
  };

  const closeChangeHandler = (e) => {
    const { target } = e;
    const { name, value } = target;
    setInputValues({ ...inputValues, [name]: Number(value) });
  };
  return (
    <div className="processes close">
      <h4>Close Account</h4>
      <div className="processes-detail">
        <label htmlFor="close-acc">Account</label>
        <input
          type="number"
          name="account"
          onChange={closeChangeHandler}
          id="close-acc"
        />
        <label htmlFor="close-pin">PIN</label>
        <input
          type="number"
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
