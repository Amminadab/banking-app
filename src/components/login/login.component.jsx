import "./login.styles.css";

import { useContext, useState } from "react";
import { AccountContext } from "../../context/account/account.context";
import { UserContext } from "../../context/user/user.context";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
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
    // console.log(account);
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
    <div className="body">
      <div className="center">
        <div className="container">
          <label
            htmlFor="show"
            className="close-btn fas fa-times"
            title="close"
          ></label>
          <div className="text">Login</div>
          {error && <p className="error-text">{error}</p>}
          <form action="#">
            <div className="data">
              <label>Account Number</label>
              <input
                type="text"
                className="login-box"
                id="name"
                name="name"
                placeholder="Account"
                onChange={textChangeHandler}
              />
            </div>
            <div className="data passer">
              <label>PIN</label>
              <input
                type="password"
                name="pin"
                onChange={textChangeHandler}
                className="login-box"
                id="pin"
                placeholder="PIN"
              />
            </div>
            <div className="forgot-pass">a</div>
            <div className="btn">
              <div className="inner"></div>
              <button
                type="submit"
                className="button"
                onClick={loginClickHandler}
              >
                login
              </button>
            </div>
            <div className="signup-link">
              Not a member
              <p
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Signup now
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
