import { useContext } from "react";
import { AccountContext } from "../../context/account/account.context";
import { UserContext } from "../../context/user/user.context";
import Account from "../account/account.component";
import Close from "../close/close.component";
import Loan from "../loan/loan.component";
import Transfer from "../transfer/transfer.component";
import Withdraw from "../withdraw/withdraw.component";

import "./process-account.styles.css";
import "./process-account.query.css";

const ProcessAccount = () => {
  const { user } = useContext(UserContext);
  const { accountNumber } = user;

  const { accountData } = useContext(AccountContext);
  const [activeAccount] = accountData.filter(
    (account) => account.accountNumber === accountNumber
  );
  const { name, accountType, transaction } = activeAccount;

  const { status } = useContext(AccountContext);
  const balance = transaction.reduce((acc, num) => acc + num);

  return (
    <div className="main-home">
      <Account
        name={name}
        accountType={accountType}
        transaction={transaction}
        accountNumber={accountNumber}
      />

      {status.type && (
        <p className={`${status.type}-text margin-m`}>{status.message}</p>
      )}
      <div className="process-container">
        <Transfer balance={balance} />
        <Withdraw balance={balance} />
        <Loan />
        <Close />
      </div>
    </div>
  );
};
export default ProcessAccount;
