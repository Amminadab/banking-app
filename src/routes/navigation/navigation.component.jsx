import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../context/user/user.context";
import "./navigation.styles.css";

const Navigation = () => {
  const { setUser } = useContext(UserContext);
  const logout = () => {
    setUser(null);
  };
  return (
    <>
      <header className="header-main">
        <div className="logo">
          <h2>BANKING APP</h2>
        </div>
        <nav>
          <ul className="link-list">
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="process">
                Process
              </Link>
            </li>
            <li>
              <Link className="link" to="profile">
                Profile
              </Link>
            </li>
            <li>
              <Link className="link" onClick={logout}>
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
