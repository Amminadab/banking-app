import "./account.styles.css";

const Account = () => {
  return (
    <div className="account-detail">
      <div className="balance">
        <p>Total Balance</p>
        <h4>14400 Birr</h4>
      </div>
      <div className="type">
        <p>Account Type</p>
        <h4>Savings</h4>
      </div>
    </div>
  );
};

export default Account;
