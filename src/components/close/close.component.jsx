const Close = () => {
  return (
    <div className="processes">
      <h4>Close Account</h4>
      <div className="processes-detail">
        <label htmlFor="close-acc">Account</label>
        <input type="text" id="close-acc" />
        <label htmlFor="close-pin">PIN</label>
        <input type="text" id="close-pin" />
        <button>Close</button>
      </div>
    </div>
  );
};

export default Close;
