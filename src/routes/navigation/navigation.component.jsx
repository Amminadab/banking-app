import { useContext, useState, useEffect, useRef } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AccountContext } from "../../context/account/account.context";
import { UserContext } from "../../context/user/user.context";

import "./navigation.styles.css";
import "./navigation.query.css";

const Navigation = () => {
  const [clicked, setClicked] = useState(false);
  const { setUser } = useContext(UserContext);
  const { setStatus } = useContext(AccountContext);

  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
    setUser(null);
    setStatus({ type: "", message: "" });
  };

  const buttonManagement = () => {
    setClicked(false);
  };

  useEffect(() => {
    if (clicked) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  }, [clicked]);

  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref?.current?.contains(event.target)) {
        setClicked(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  return (
    <>
      <header className="header-main" ref={ref}>
        <div className="logo">
          <h2>BANKING APP</h2>
        </div>
        <nav>
          <ul className={clicked ? "link-list active" : "link-list"}>
            <li>
              <Link className="link" onClick={buttonManagement} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" onClick={buttonManagement} to="process">
                Process
              </Link>
            </li>
            <li>
              <Link className="link" onClick={buttonManagement} to="profile">
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
        <div id="mobile">
          <i
            id="bar"
            onClick={() => {
              setClicked(!clicked);
            }}
            className={clicked ? "fas fa-times " : "fas fa-bars"}
          ></i>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
