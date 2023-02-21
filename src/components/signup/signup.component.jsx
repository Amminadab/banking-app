import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AccountContext } from "../../context/account/account.context";
import { UserContext } from "../../context/user/user.context";

import "./signup.styles.css";

const SignUp = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const { accountData, setAccountData } = useContext(AccountContext);
  const randomAccountNumber = Math.trunc(Math.random() * 10000) + 1;
  const [inputValues, setInputValues] = useState({
    accountNumber: String(randomAccountNumber),
    name: "",
    FatherName: "",
    age: "",
    transaction: [],
    accountType: "saving",
    pin: "",
  });

  const [error, setError] = useState("");
  const [conPin, setConPin] = useState("");

  const pinChangeHandler = (e) => {
    setConPin(e.target.value);
  };

  // console.log(inputValues);

  const signupChangeHandler = (e) => {
    if (e.target.name === "transaction") {
      setInputValues({
        ...inputValues,
        [e.target.name]: [Number(e.target.value)],
      });
    } else {
      setInputValues({
        ...inputValues,
        [e.target.name]: e.target.value,
      });
    }
  };

  const signUpClickHandler = (e) => {
    let isFormValid = document.getElementById("form").checkValidity();
    if (!isFormValid) {
      document.getElementById("form").reportValidity();
    } else {
      e.preventDefault();

      //name cant include number characters

      if (/\d/.test(inputValues.name) || /\d/.test(inputValues.FatherName)) {
        setError("you cant include a number when typing name");
      }

      //age control
      else if (inputValues.age < 18) {
        setError("you can't be under 18");
      }
      // initial deposit must be over 100
      else if (
        inputValues.transaction[0] <= 99 ||
        inputValues.transaction[0] > 1000000
      ) {
        setError("you initial deposit can't be under 100 and over a million ");
      }
      //pin must me over 4 under 8 characters
      else if (inputValues.pin.length <= 3 || inputValues.pin.length > 8) {
        setError("you pin must be between 4 and 8 characters ");
      }
      //if Pin doesn't match
      else if (inputValues.pin !== conPin) {
        setError("you PIN doesn't match ");
      } else {
        // console.log(inputValues);
        setAccountData([...accountData, { ...inputValues }]);
        setUser({ ...inputValues });
        navigate("/");
      }
    }
  };

  return (
    <div className="body">
      <div className="container-r">
        <div className="title">Registration</div>
        {error && <p className="signup-error-text">{error}</p>}
        <div className="content">
          <form className="form" id="form" method="POST">
            <div className="user-details">
              <div className="input-box">
                <span className="details">First Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your first name"
                  onChange={signupChangeHandler}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Last Name</span>
                <input
                  type="text"
                  name="FatherName"
                  placeholder="Enter your last name"
                  onChange={signupChangeHandler}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">age</span>
                <input
                  type="number"
                  name="age"
                  onChange={signupChangeHandler}
                  placeholder="Enter your age"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Account Type</span>
                <select
                  name="accountType"
                  onChange={signupChangeHandler}
                  id="lang"
                >
                  <option value="saving">saving</option>
                  <option value="salary">salary</option>
                  <option value="fixed">fixed</option>
                  <option value="recurring">recurring</option>
                </select>
              </div>
              <div className="input-box">
                <span className="details">Birth Place</span>
                <input
                  type="text"
                  name="country"
                  onChange={signupChangeHandler}
                  placeholder="enter your country"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Initial Deposit</span>
                <input
                  type="number"
                  name="transaction"
                  onChange={signupChangeHandler}
                  placeholder="100"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">PIN</span>
                <input
                  type="text"
                  name="pin"
                  onChange={signupChangeHandler}
                  placeholder="Enter your PIN"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Confirm PIN</span>
                <input
                  type="text"
                  name="confirmPin"
                  onChange={pinChangeHandler}
                  placeholder="Confirm your PIN"
                  required
                />
              </div>
            </div>
            <div className="gender-details">
              <input
                type="radio"
                onChange={signupChangeHandler}
                name="gender"
                id="dot-1"
                value="male"
                checked
              />
              <input
                type="radio"
                onChange={signupChangeHandler}
                name="gender"
                id="dot-2"
                value="female"
              />

              <span className="gender-title">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                  <span className="dot one"></span>
                  <span className="gender">Male</span>
                </label>
                <label htmlFor="dot-2">
                  <span className="dot two"></span>
                  <span className="gender">Female</span>
                </label>
              </div>
            </div>
            <div className="button">
              <input
                type="submit"
                onClick={signUpClickHandler}
                value="Sign Up"
              />
            </div>
            <div className="signup-linker">
              a member
              <p
                className="prp"
                onClick={() => {
                  navigate("/");
                }}
              >
                Login now
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
