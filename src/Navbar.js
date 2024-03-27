import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [logReg, setLogReg] = useState(false);
  const showLogReg = () => setLogReg(true);
  const hideLogReg = () => setLogReg(false);

  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <i className="fas fa-cat"></i>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links arrow" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
        </ul>
        <ul className="nav-icons">
          <li className="nav-icon">
            <i className="fas fa-search span-icon"></i>
          </li>
          <li className="nav-icon">
            <span className="span-icon">
              <div className="test">
                <i className="fas fa-shopping-cart span-icon"></i>
                <span className="cart-cnt">0</span>
              </div>
            </span>
          </li>
          <li className="nav-icon" onMouseOver={showLogReg} onMouseOut={hideLogReg}>
            <span className="span-icon">
              ACCOUNT <i className="fas fa-user"></i>
            </span>

            <div className={logReg ? "log-reg-div active" : "log-reg-div"}>
              <span className="log-reg">LOGIN</span>
              <span className="log-reg">REGISTER</span>
            </div>
          </li>
        </ul>
        {/* {buttn && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
      </div>
    </nav>
       <Outlet />
    </>
  );
}
export default Navbar;
