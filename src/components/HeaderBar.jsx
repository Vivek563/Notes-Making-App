import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const AppBar = styled(MuiAppBar)`
  z-index: 1201;
  background-color: white;
  height: 70px;
`;

const Heading = styled(Typography)`
  font-family: "Segoe UI Emoji";
  font-weight: 350;
  font-size: 38px;
  font-weight:900;
  margin-left: 15px;
  color: Black;
`;

const HeaderBar = ({ open, handleDrawer }) => {
  return (
    <AppBar open={open}>
      <Toolbar>
        <IconButton
          onClick={handleDrawer}
          edge="start"
          color="inherit"
          sx={{
            marginRight: "5px",
            color: "black",
          }}
        >
          <MenuIcon />
        </IconButton>
        <img
          src={require("../Assets/take-note.png")}
          alt="logo"
          style={{ width: 40 }}
        />
        <Heading>Notes Record</Heading>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
