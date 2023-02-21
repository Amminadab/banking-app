import { useContext, useState } from "react";
import { AccountContext } from "../../context/account/account.context";
import "./change-pin.styles.css";

const ChangePin = ({ pin, accountNumber }) => {
  const { accountData, setAccountData } = useContext(AccountContext);
  const [inputValues, setInputValues] = useState({
    oldPin: "",
    newPin: "",
    confermPin: "",
  });
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const changePinChangeHandler = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const changePinClickHandler = (e) => {
    let isFormValid = document.getElementById("edit-form-2").checkValidity();
    if (!isFormValid) {
      document.getElementById("edit-form-2").reportValidity();
    } else {
      e.preventDefault();

      // previos pin dont match
      if (pin !== String(inputValues.oldPin)) {
        setStatus({
          type: "error",
          message: "you previous password doesn't match",
        });
      }
      // the new pin and the confirm pin doesnt match
      else if (inputValues.confermPin !== inputValues.newPin) {
        setStatus({
          type: "error",
          message: "you new password doesn't match",
        });
      }

      // if the new password doesnt contain 4 to 8 characters
      else if (inputValues.newPin.length > 8 || inputValues.newPin.length < 4) {
        setStatus({
          type: "error",
          message: "password must be 4 - 8 charactes",
        });
      } else {
        //seting the new password information

        const newAccountData = accountData.map((account) =>
          account.accountNumber === accountNumber
            ? { ...account, pin: inputValues.newPin }
            : { ...account }
        );

        setAccountData([...newAccountData]);
        document.querySelector(".input4").value = "";
        document.querySelector(".input5").value = "";
        document.querySelector(".input6").value = "";

        setInputValues({
          oldPin: "",
          newPin: "",
          confermPin: "",
        });
        setStatus({
          type: "success",
          message: "successfully changed your password",
        });
      }
    }
  };

  return (
    <form id="edit-form-2" className="edit-2">
      {status.type && (
        <p className={`${status.type}-text `}>{status.message}</p>
      )}
      <div className="edit-pin">
        <div className="input-box-edit">
          <span className="details">Old PIN</span>
          <input
            type="number"
            onChange={changePinChangeHandler}
            name="oldPin"
            placeholder=""
            className="input4"
            required
          />
        </div>
        <div className="input-box-edit">
          <span className="details">New PIN</span>
          <input
            type="number"
            onChange={changePinChangeHandler}
            name="newPin"
            placeholder=""
            className="input5"
            required
          />
        </div>
        <div className="input-box-edit">
          <span className="details">Conferm PIN</span>
          <input
            type="number"
            onChange={changePinChangeHandler}
            name="confermPin"
            placeholder=""
            className="input6"
            required
          />
        </div>
        <div className="button-r">
          <input
            type="submit"
            onClick={changePinClickHandler}
            value="Change PIN"
          />
        </div>
      </div>
    </form>
  );
};

export default ChangePin;
