import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ScreenSize } from "../../../pages/home/homeContext";
import { useContext } from "react";
const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { maxWidth } = useContext(ScreenSize);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const style = {
    textTransform: "none",
    fontWeight: "bold",
  };
  return (
    <Stack
      direction={"row"}
      sx={{
        color: "black",
        height: "60px",
        padding: "5px",
        borderBottom: " 1px solid #EDEDED",
        borderTop: " 1px solid #EDEDED",
      }}
      justifyContent={"center"}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ maxWidth, width: "100%" }}
      >
        <IconButton edge="start" color="inherit">
          <MenuIcon />
        </IconButton>
        <Button
          color="inherit"
          sx={{
            borderRight: "1px solid gray",
            borderRadius: 0,
          }}
          endIcon={<ExpandMoreIcon />}
          onClick={handleMenuOpen}
        >
          Shop By Category
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          sx={{
            width: "100%",
          }}
        >
          <MenuItem onClick={handleMenuClose}>Electronics</MenuItem>
          <MenuItem onClick={handleMenuClose}>Fashion</MenuItem>
          <MenuItem onClick={handleMenuClose}>Home Appliances</MenuItem>
        </Menu>

        {/* Nav Links */}
        {["Home", "Megamenu", "Shop", "Blog", "Account", "Pages"].map(
          (label) => (
            <Button
              key={label}
              color="inherit"
              sx={style}
              endIcon={<ExpandMoreIcon />}
            >
              {label}
            </Button>
          )
        )}
        <Button color="inherit" sx={style}>
          Buy Theme
        </Button>
        <div
          style={{ marginLeft: "auto", fontSize: "15px", fontWeight: "bold" }}
        >
          Call Us: 089252 97807
        </div>
      </Stack>
    </Stack>
  );
};

export default NavBar;
