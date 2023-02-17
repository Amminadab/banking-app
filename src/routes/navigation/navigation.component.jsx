import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.css";

const Navigation = () => {
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
              <Link className="link" to="/">
                Profile
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
