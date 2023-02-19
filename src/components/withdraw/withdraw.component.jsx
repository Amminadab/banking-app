import { useContext, useState } from "react";
import { AccountContext } from "../../context/account/account.context";
import { UserContext } from "../../context/user/user.context";

const Withdraw = ({ balance }) => {
  const [amount, setAmount] = useState("");
  const { setStatus, withdraw } = useContext(AccountContext);
  const { user } = useContext(UserContext);

  const withdrawClickHandler = (e) => {
    e.preventDefault();

    //check if the box is empty
    if (amount === null || amount === "") {
      setStatus({
        type: "error",
        message: "The fields can't be empty and can't be alphabets characters",
      });
    }
    //the amount is less than what he have
    else if (balance < amount) {
      setStatus({
        type: "error",
        message: "your balance is lower than the amount you want to Withdraw",
      });
    }
    // if the withdrawal is less that 100 birr
    else if (100 > amount) {
      setStatus({
        type: "error",
        message: "You can not withdrawal less than 100 Birr",
      });
    } else if (100 < amount < balance) {
      withdraw(amount, user);
      document.querySelector("#withdraw-amm").value = "";
      setAmount("");
    } else {
      setStatus({
        type: "error",
        message: "The fields can't be empty and can't be alphabets characters",
      });
    }
  };
  const withdrawChangeHandler = (e) => {
    if (e.target.value === "") {
      setAmount(e.target.value);
    } else {
      setAmount(Number(e.target.value));
    }
  };

  return (
    <form className="processes withdraw">
      <h4>Withdraw Money</h4>
      <div className="processes-detail">
        <label htmlFor="withdraw-amm">Amount</label>
        <input
          type="number"
          onChange={withdrawChangeHandler}
          id="withdraw-amm"
        />
        <button onClick={withdrawClickHandler}>Withdraw</button>
      </div>
    </form>
  );
};

export default Withdraw;
