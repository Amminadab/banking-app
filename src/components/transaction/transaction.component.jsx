import "./transaction.styles.css";
import "./transaction.query.css";
import TransactionField from "../transaction-field/transaction-field.component";

const Transaction = ({ transaction }) => {
  const tr = "deposit";
  const wd = "withdraw";
  let transactionType;

  return (
    <div className="transaction">
      {transaction.map((t, index) => {
        if (t > 0) {
          transactionType = tr;
        } else {
          transactionType = wd;
        }
        return (
          <div key={index}>
            <TransactionField
              transactionType={transactionType}
              t={t}
              key={index}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Transaction;
