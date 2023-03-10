import "./account.styles.css";
import "./account.query.css";

const Account = ({ accountType, transaction, accountNumber }) => {
  const accountBalance = transaction.reduce((acc, t) => acc + t);
  return (
    <div className="account-detail">
      <div className="balance">
        <p>Total Balance</p>
        <h4>{accountBalance} Birr</h4>
      </div>
      <div className="type">
        <p>Account No</p>
        <h4 className="account-number">{accountNumber}</h4>
      </div>
      <div className="type">
        <p>Account Type</p>
        <h4>{accountType}</h4>
      </div>
    </div>
  );
};

export default Account;
