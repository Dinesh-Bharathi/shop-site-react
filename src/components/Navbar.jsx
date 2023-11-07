import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <Link to="/" className="logo">
          <LocalMallOutlinedIcon
            style={{ marginRight: "4px", color: "orangered" }}
          />
          Easybuy<span>.com</span>
        </Link>
        <ul>
          <li>
            <Link to="/wishlist">
              <FavoriteBorderOutlinedIcon />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <ShoppingCartOutlinedIcon />
            </Link>
          </li>
          <li>
            <Link to="/account">
              <AccountCircleOutlinedIcon />
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
