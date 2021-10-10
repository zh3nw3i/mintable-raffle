import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import "./Footer.css";

export default function Footer(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }} className="root">
      <Toolbar className="toolbar" className="footer"></Toolbar>
    </Box>
  );
}
