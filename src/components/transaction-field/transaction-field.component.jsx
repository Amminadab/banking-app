const TransactionField = ({ t, transactionType }) => {
  return (
    <div className={`each-transaction ${transactionType}`}>
      <p className={`transaction-type`}>{transactionType}</p>
      <h2 className="transaction-amount">{t} birr</h2>
    </div>
  );
};

export default TransactionField;
