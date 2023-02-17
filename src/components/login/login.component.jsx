import "./login.styles.css";
import logo from "../../assets/user-solid.svg";
import { useContext, useState } from "react";
import { AccountContext } from "../../context/account/account.context";
import { UserContext } from "../../context/user/user.context";

const LoginPage = () => {
  const [loginInfo, setLoginInfo] = useState({
    name: "",
    pin: "",
  });
  //destructuring the two values from the state
  const { name, pin } = loginInfo;

  const [error, setError] = useState("");

  const { accountData } = useContext(AccountContext);
  const { setUser } = useContext(UserContext);

  const loginClickHandler = (e) => {
    e.preventDefault();

    // check if the user is a real user
    //check if the account name match

    const account = accountData.filter(
      (account) =>
        account.accountNumber.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
    console.log(account);
    //check if the account not matched

    if (!account[0]) {
      setError("There is no account with this AccountNo");
    }
    //check if the account password match
    else {
      if (account[0].pin === pin) {
        setUser(account[0]);
      } else {
        setError("Incorrect Password");
      }
    }
  };

  const textChangeHandler = (e) => {
    if (e.target.name === "name") {
      setLoginInfo({
        ...loginInfo,
        name: e.target.value,
      });
    }
    if (e.target.name === "pin") {
      setLoginInfo({
        ...loginInfo,
        pin: e.target.value,
      });
    }
  };
  return (
    <div className="wrapper">
      <form className="login-container">
        <img className="login-logo" src={logo} alt="user svg" />
        {error && <p className="error-text">{error}</p>}
        <div className="login-name">
          <label htmlFor="name">Account Number</label>
          <input
            type="text"
            className="login-box"
            id="name"
            name="name"
            placeholder="Name"
            onChange={textChangeHandler}
          />
        </div>
        <div className="login-pin">
          <label htmlFor="pin">PIN</label>
          <input
            type="password"
            name="pin"
            onChange={textChangeHandler}
            className="login-box"
            id="pin"
            placeholder="pin"
          />
        </div>
        <button onClick={loginClickHandler} className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
