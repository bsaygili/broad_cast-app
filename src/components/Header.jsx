import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

function Header() {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        BroadCasters
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          Open Air Shows
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
}

export default Header;
