import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navigation.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container ">
          <Link className="nav-link" to="/">
            SHOP
          </Link>
          <Link className="nav-link" to="/">
            CONTACT US
          </Link>
          <Link className="nav-link" to="/auth">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
