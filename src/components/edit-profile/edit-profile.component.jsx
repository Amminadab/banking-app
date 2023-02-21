import { useContext } from "react";
import { useState } from "react";
import { AccountContext } from "../../context/account/account.context";
import "./edit-profile.styles.css";

const EditProfile = ({ activeAccount }) => {
  const { accountData, setAccountData } = useContext(AccountContext);

  //reciving account information
  const { accountNumber, name, FatherName, age, accountType, country } =
    activeAccount;
  const [inputValues, setInputValues] = useState({
    name: "",
    FatherName: "",
    age: "",
  });
  //to set error ans success message
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const editProfileClickHandler = (e) => {
    let isFormValid = document.getElementById("edit-form").checkValidity();
    if (!isFormValid) {
      document.getElementById("edit-form").reportValidity();
    } else {
      e.preventDefault();

      //check if name includes number character
      if (/\d/.test(inputValues.name) || /\d/.test(inputValues.FatherName)) {
        setStatus({
          type: "error",
          message: "you cant include a number when typing name",
        });
      }
      //check age
      else if (inputValues.age < 18) {
        setStatus({
          type: "error",
          message: "age can't be under 18 ",
        });
      } else {
        //seting the new accunt information

        const newAccountData = accountData.map((account) =>
          account.accountNumber === accountNumber
            ? { ...account, ...inputValues }
            : { ...account }
        );

        setAccountData([...newAccountData]);
        document.querySelector(".input1").value = "";
        document.querySelector(".input2").value = "";
        document.querySelector(".input3").value = "";

        setInputValues({
          name: "",
          FatherName: "",
          age: "",
        });

        setStatus({
          type: "success",
          message: "successfully changed your profile",
        });
      }
    }
  };

  const editProfileChangeHandler = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };
  return (
    <form id="edit-form" className="edit">
      {status.type && (
        <p className={`${status.type}-text `}>{status.message}</p>
      )}
      <div className="edit-profile">
        <div className="input-box-edit">
          <span className="details">First Name</span>
          <input
            type="text"
            name="name"
            className="input1"
            onChange={editProfileChangeHandler}
            placeholder={name}
            required
          />
        </div>
        <div className="input-box-edit">
          <span className="details">Last Name</span>
          <input
            type="text"
            name="FatherName"
            className="input2"
            onChange={editProfileChangeHandler}
            placeholder={FatherName}
            required
          />
        </div>
        <div className="input-box-edit">
          <span className="details">Account Number</span>
          <p className="input-p">{accountNumber}</p>
        </div>
        <div className="input-box-edit">
          <span className="details">age</span>
          <input
            type="number"
            name="age"
            onChange={editProfileChangeHandler}
            placeholder={age}
            className="input3"
            required
          />
        </div>
        <div className="input-box-edit">
          <span className="details">Account Type</span>
          <p className="input-p">{accountType}</p>
        </div>
        <div className="input-box-edit">
          <span className="details">Birth PLace</span>
          <p className="input-p">{country}</p>
        </div>
        <div className="button-r">
          <input
            type="submit"
            onClick={editProfileClickHandler}
            value="Change Profile"
          />
        </div>
      </div>
    </form>
  );
};

export default EditProfile;
