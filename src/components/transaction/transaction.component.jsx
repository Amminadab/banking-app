import "./transaction.styles.css";

const Transaction = ({ transaction }) => {
  const tr = "deposit";
  const wd = "withdraw";
  let transactionType;

  return (
    <div className="transaction">
      {transaction.map((t) => {
        if (t > 0) {
          transactionType = tr;
        } else {
          transactionType = wd;
        }
        return (
          <div className={`each-transaction ${transactionType}`} key={t}>
            <p className={`transaction-type `}>{transactionType}</p>
            <h2 className="transaction-amount">{t} birr</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Transaction;
