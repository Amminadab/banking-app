import Account from "../account/account.component";
import Transaction from "../transaction/transaction.component";
import { useContext } from "react";
import { UserContext } from "../../context/user/user.context";

import "./main-home.styles.css";

const MainHome = () => {
  const { user } = useContext(UserContext);
  const { name, accountType, transaction } = user;
  return (
    <section className="main-home">
      <h3 className="welcome-text">Welcome, {name} </h3>
      <Account
        name={name}
        accountType={accountType}
        transaction={transaction}
      />
      <Transaction transaction={transaction} />
    </section>
  );
};

export default MainHome;
