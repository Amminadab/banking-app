import "./App.css";
import Login from "./routes/login/login.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import { AccountContext } from "./context/account/account.context";
import { useContext, useEffect } from "react";
import ACCOUNT_DATA from "./accounts-data";
import { UserContext } from "./context/user/user.context";
import Process from "./routes/process/process.component";
import SignUp from "./components/signup/signup.component";
import Profiles from "./routes/profiles/profiles.component";

function App() {
  const { setAccountData } = useContext(AccountContext);

  useEffect(() => {
    setAccountData(ACCOUNT_DATA);
  }, [setAccountData]);

  // console.log(NEW_ACCOUNT_DATA);

  const { user } = useContext(UserContext);
  if (user !== null) {
    // console.log(user);
    return (
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="process" element={<Process />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="profile" element={<Profiles />} />
        </Route>
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    );
  }
}

export default App;
