import "./login.styles.css";

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
      <div class="center">
        <div class="container">
          <label
            for="show"
            class="close-btn fas fa-times"
            title="close"
          ></label>
          <div class="text">Login</div>
          {error && <p className="error-text">{error}</p>}
          <form action="#">
            <div class="data">
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
            <div class="data passer">
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
            <div class="forgot-pass">a</div>
            <div class="btn">
              <div class="inner"></div>
              <button type="submit" class="button" onClick={loginClickHandler}>
                login
              </button>
            </div>
            <div class="signup-link">
              {/* Not a member? <a href="#">Signup now</a> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
