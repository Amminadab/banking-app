import "./App.css";
import Login from "./routes/login/login.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import { AccountContext } from "./context/account/account.context";
import { useContext, useEffect } from "react";
import ACCOUNT_DATA from "./accounts-data";
import { UserContext } from "./context/user/user.context";

function App() {
  const { accountData, setAccountData } = useContext(AccountContext);

  useEffect(() => {
    setAccountData(ACCOUNT_DATA);
  }, [setAccountData]);

  // console.log(accountData);

  const { user } = useContext(UserContext);
  if (user !== null) {
    // console.log(user);
    return (
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    );
  }
}

export default App;
