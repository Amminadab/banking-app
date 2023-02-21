import { useContext } from "react";
import { AccountContext } from "../../context/account/account.context";
import { UserContext } from "../../context/user/user.context";
import ChangePin from "../change-pin/change-pin.component";
import EditProfile from "../edit-profile/edit-profile.component";
import "./profile.styles.css";

const Profile = () => {
  const { accountData } = useContext(AccountContext);
  const { user } = useContext(UserContext);

  const [activeAccount] = accountData.filter(
    (account) => account.accountNumber === user.accountNumber
  );

  return (
    <section className="main-home profile-flex">
      <EditProfile activeAccount={activeAccount} />
      <ChangePin
        pin={activeAccount.pin}
        accountNumber={activeAccount.accountNumber}
      />
    </section>
  );
};
export default Profile;
