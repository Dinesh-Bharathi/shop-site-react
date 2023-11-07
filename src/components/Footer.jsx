import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <div>
      <Copyright sx={{ mt: 5 }} />
    </div>
  );
}

export default Footer;
