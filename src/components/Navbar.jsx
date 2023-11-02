import React, { useState, useRef } from "react";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AdbIcon from "@mui/icons-material/Adb";
import AppleIcon from "@mui/icons-material/Apple";
import WindowIcon from "@mui/icons-material/Window";
import { motion } from "framer-motion";
import Modal from "./utlis/Modal";
import { HelpCenterOutlined, Person3Outlined } from "@mui/icons-material";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import AssignmentReturnOutlinedIcon from "@mui/icons-material/AssignmentReturnOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import RecentActorsIcon from "@mui/icons-material/RecentActors";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  const containerRef = useRef(null);

  const handleScrollLeft = () => {
    containerRef.current.scrollLeft -= 200; // adjust scroll distance as needed
  };

  const handleScrollRight = () => {
    containerRef.current.scrollLeft += 200; // adjust scroll distance as needed
  };

  return (
    <div className="navbar">
      <div className="top-bar">
        <span>Download App:</span>
        <ul>
          <li>
            <AdbIcon sx={{ fontSize: "1rem" }} />
          </li>
          <li>
            <AppleIcon sx={{ fontSize: "1rem" }} />
          </li>
          <li>
            <WindowIcon sx={{ fontSize: "1rem" }} />
          </li>
        </ul>
      </div>
      <div>
        <nav>
          <div className="logo-container">
            <Link
              to="/"
              className="logo"
              onClick={() => setShowLinks(false)}
              style={{ padding: "0 1em" }}
            >
              <SpaOutlinedIcon sx={{ color: "#24a3b5", fontSize: "2rem" }} />
              <h1>EasyBuy</h1>
              <span>.com</span>
            </Link>
            <button
              className="menu-icon"
              onClick={() => setShowLinks(!showLinks)}
            >
              {showLinks ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
          <ul
            className="links"
            style={{
              left: showLinks ? "0" : "-170px",
              transition: "0.5s",
              padding: "0 1em",
            }}
          >
            <li>
              <Link to="/wishlist">
                <FavoriteBorderIcon />
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <ShoppingCartIcon />
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                onMouseEnter={() => setShowAccount(true)}
                onMouseLeave={() => setShowAccount(false)}
              >
                <AccountCircleOutlinedIcon
                  sx={{ color: showAccount && "#24a3b5" }}
                />
              </Link>
            </li>
          </ul>
        </nav>
        <motion.div
          className="accounts-tab"
          style={{ display: showAccount && "block" }}
          onMouseEnter={() => setShowAccount(true)}
          onMouseLeave={() => setShowAccount(false)}
        >
          <Link
            to="/login"
            onClick={() => {
              setShowAccount(false);
            }}
            className="login-register"
          >
            <RecentActorsIcon sx={{ marginRight: "0.5em" }} />
            Login/register
          </Link>
          <ul>
            <Modal link="My Orders" icon={<LibraryBooksOutlinedIcon />} />
            <Modal link="My Returns" icon={<AssignmentReturnOutlinedIcon />} />
            <Modal link="Wishlists" icon={<FavoriteBorderIcon />} />
            <Modal link="My Profile" icon={<Person3Outlined />} />
            <Modal link="Cart" icon={<ShoppingCartOutlinedIcon />} />
            <Modal link="Feedback" icon={<FeedbackOutlinedIcon />} />
            <Modal link="Help & Support" icon={<SupportAgentOutlinedIcon />} />
          </ul>
        </motion.div>
      </div>
      <div className="scrollable-list second-bar">
        <button onClick={handleScrollLeft}>
          <ChevronLeftIcon />
        </button>
        <div className="list-container" ref={containerRef}>
          <ul>
            <li>Mobiles</li>
            <li>Accessories</li>
            <li>Men</li>
            <li>Women</li>
            <li>Home&Kitchen</li>
            <li>Appliances</li>
            <li>Sports</li>
            <li>Essentials</li>
            <li>OfferZone</li>
          </ul>
        </div>
        <button onClick={handleScrollRight}>
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
