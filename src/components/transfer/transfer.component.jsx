const Transfer = () => {
  return (
    <div className="processes">
      <h4>Transfer TO Account</h4>
      <div className="processes-detail">
        <label htmlFor="transfer-acc">Account</label>
        <input type="text" id="transfer-acc" />
        <label htmlFor="transfer-amm">Amount</label>
        <input type="text" id="transfer-amm" />
        <button>Transfer</button>
      </div>
    </div>
  );
};

export default Transfer;
