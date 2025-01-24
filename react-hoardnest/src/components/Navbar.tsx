import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Menu Icon */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo Link */}
        <Box sx={{ flexGrow: 1 }}>
          <Link to="/">
            <img src={logo} alt="Logo" height="40" width="120" />
          </Link>
        </Box>

        {/* Wishlist Icon */}
        <IconButton color="inherit" aria-label="open wishlist">
          <FavoriteIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
