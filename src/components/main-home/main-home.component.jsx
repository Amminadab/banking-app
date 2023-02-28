import Account from "../account/account.component";
import Transaction from "../transaction/transaction.component";
import { useContext } from "react";
import { UserContext } from "../../context/user/user.context";
import { AccountContext } from "../../context/account/account.context";

import "./main-home.styles.css";
import "./main-home.query.css";

const MainHome = () => {
  const { user } = useContext(UserContext);
  const { accountData } = useContext(AccountContext);
  const { accountNumber } = user;
  const activeAccount = accountData.filter(
    (account) => account.accountNumber === accountNumber
  );
  const [{ name, accountType, transaction }] = activeAccount;

  return (
    <section className="main-home">
      <h3 className="welcome-text">Welcome, {name} </h3>
      <Account
        name={name}
        accountType={accountType}
        transaction={transaction}
        accountNumber={accountNumber}
      />
      {transaction && <Transaction transaction={transaction} />}
    </section>
  );
};

export default MainHome;
