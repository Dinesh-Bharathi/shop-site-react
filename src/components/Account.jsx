import React from "react";
import { Link } from "react-router-dom";

function Account() {
  return (
    <div>
      <h2 style={{ display: "block", textAlign: "center" }}>
        Login to Account
      </h2>
      <Link
        style={{ display: "block", textAlign: "center" }}
        to="/account/login"
      >
        Login
      </Link>
    </div>
  );
}

export default Account;
