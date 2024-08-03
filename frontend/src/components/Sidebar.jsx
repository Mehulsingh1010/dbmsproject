import { useState, useEffect } from "react";
import "./Sidebar.scss";
import "boxicons/css/boxicons.min.css";
import { Link, useLocation } from "react-router-dom";
import Logout from "../pages/Logout";
import logo from "./sidelogo.png"
const Sidebar = () => {
  const [isSidebarClosed, setIsSidebarClosed] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation(); // Get the current path

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const handleToggleSidebar = () => {
    setIsSidebarClosed((prev) => !prev);
  };

  const handleSearchClick = () => {
    setIsSidebarClosed(false);
  };

  const handleModeSwitch = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <nav className={`sidebar ${isSidebarClosed ? "close" : ""}` }>
      <header>
        <div className="image-text">
          <Link to="/home">
            <span className="image">
              <img src={logo} alt="" />
            </span>
          </Link>
          <div className="text logo-text">
            <span className="name">BetterMent</span>
            <span className="profession">Result Analyzer App</span>
          </div>
        </div>
        <i
          className="bx bx-chevron-right toggle"
          onClick={handleToggleSidebar}
        ></i>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <li className="search-box" onClick={handleSearchClick}>
            <i className="bx bx-search icon"></i>
            <input type="text" placeholder="find more " />
          </li>
          <ul className="menu-links">
            <li
              className={`nav-link ${
                location.pathname === "/home" ? "active" : ""
              }`}
            >
              <Link to="/home">
                <i className="bx bx-home-alt icon"></i>
                <span className="text nav-text">Home</span>
              </Link>
            </li>
            <li
              className={`nav-link ${
                location.pathname === "/result" ? "active" : ""
              }`}
            >
              <Link to="/result">
                <i className="bx bx-bar-chart-alt-2 icon"></i>
                <span className="text nav-text">Result Analysis</span>
              </Link>
            </li>
            <li
              className={`nav-link ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              <Link to="/about">
                <i className="bx bx-user icon"></i>
                <span className="text nav-text">About</span>
              </Link>
            </li>
            <li
              className={`nav-link ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              <Link to="/contact">
                <i className="bx bx-envelope icon"></i>
                <span className="text nav-text">Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="bottom-content">
          <li>
            <Link to="/">
              <i className="bx bx-log-out icon"></i>
              <span className="text nav-text">
                {" "}
                <Logout />{" "}
              </span>
            </Link>
          </li>
          <li className="mode">
            <div className="sun-moon">
              <i
                className={`bx bx-moon icon moon ${isDarkMode ? "hidden" : ""}`}
              ></i>
              <i
                className={`bx bx-sun icon sun ${isDarkMode ? "" : "hidden"}`}
              ></i>
            </div>
            <span className="mode-text text">
              {isDarkMode ? "Light mode" : "Dark mode"}
            </span>
            <div className="toggle-switch" onClick={handleModeSwitch}>
              <span className="switch"></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
