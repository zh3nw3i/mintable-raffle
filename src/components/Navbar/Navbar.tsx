import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MintableLogo from "../../assets/Mintable-Logo.svg";
import "./Navbar.css";

export default function NavBar(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }} className="root">
      <AppBar position="static" elevation={0} className="appbar">
        <Toolbar className="toolbar">
          <div>
            <img src={MintableLogo} />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
