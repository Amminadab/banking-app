import Account from "../account/account.component";
import Transaction from "../transaction/transaction.component";

import "./main-home.styles.css";

const MainHome = () => {
  return (
    <section className="main-home">
      <h3 className="welcome-text">Welcome, Amminadab </h3>
      <Account />
      <Transaction />
    </section>
  );
};

export default MainHome;
