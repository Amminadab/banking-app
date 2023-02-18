import { useContext, useState } from "react";
import { AccountContext } from "../../context/account/account.context";
import { UserContext } from "../../context/user/user.context";

const Loan = () => {
  const [amount, setAmount] = useState("");
  const { setStatus, loan } = useContext(AccountContext);
  const { user } = useContext(UserContext);

  const loanClickHandler = (e) => {
    e.preventDefault();

    //check if the field is empty
    if (amount === null || amount === "") {
      setStatus({
        type: "error",
        message:
          "The fields can't be empty and they can't include alphabetic characters",
      });
    }
    //the lone is above 10000
    else if (10000 < amount) {
      setStatus({
        type: "error",
        message: "you cant take a loan that is more than 10000",
      });
    }
    //the lone is above 10000
    else if (amount < 100) {
      setStatus({
        type: "error",
        message: "you cant take a loan that is less than 100",
      });
    }
    // if valid
    else if (amount < 10000) {
      loan(amount, user);
      document.querySelector("#request-amm").value = "";
      setAmount("");
    } else {
      setStatus({
        type: "error",
        message: "The fields can't be empty and can't be alphabets characters",
      });
    }
  };

  const loanChangeHandler = (e) => {
    if (e.target.value === "") {
      setAmount(e.target.value);
    } else {
      setAmount(Number(e.target.value));
    }
  };
  return (
    <div className="processes">
      <h4>Request Loan</h4>
      <div className="processes-detail">
        <label htmlFor="request-amm">Amount</label>
        <input type="text" onChange={loanChangeHandler} id="request-amm" />
        <button onClick={loanClickHandler}>Request</button>
      </div>
    </div>
  );
};

export default Loan;
