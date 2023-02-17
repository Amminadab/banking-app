const Loan = () => {
  return (
    <div className="processes">
      <h4>Request Loan</h4>
      <div className="processes-detail">
        <label htmlFor="request-amm">Amount</label>
        <input type="text" id="request-amm" />
        <button>Request</button>
      </div>
    </div>
  );
};

export default Loan;
