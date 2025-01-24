import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const hoarnestTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#e7dbcd",
    },
  },
});

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const generalLinks = [
    { text: "AGB" },
    { text: "Datenschutz" },
    { text: "Impressum" },
  ];

  const categories = [
    "Abendtaschen",
    "Beuteltaschen",
    "Businesstaschen",
    "Geldbörsen & Etuis",
    "Gürteltaschen",
    "Handtaschen",
    "Henkeltaschen",
    "Koffer",
    "Kosmetiktaschen",
    "Reisetaschen",
    "Rucksäcke",
    "Schultertaschen",
    "Shopper",
    "Sporttaschen",
    "Strandtaschen",
    "Umhängetaschen",
  ];

  return (
    <ThemeProvider theme={hoarnestTheme}>
      <AppBar position="sticky">
        <Toolbar>
          {/* Menu Icon */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            role="presentation"
          >
            <div
              style={{
                width: 250,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "1rem",
              }}
            >
              <Typography variant="h4" gutterBottom align="center">
                Menü
              </Typography>
              <IconButton onClick={toggleDrawer(false)} aria-label="Close Menu">
                <ChevronLeftIcon />
              </IconButton>
            </div>

            <Divider />

            <List subheader={<ListSubheader>Allgemein</ListSubheader>}>
              {generalLinks.map((link, index) => (
                <ListItem button key={index}>
                  <ListItemText primary={link.text} />
                </ListItem>
              ))}
            </List>

            <Divider />

            <List subheader={<ListSubheader>Taschen-Kategorien</ListSubheader>}>
              {categories.map((category, index) => (
                <ListItem button key={index}>
                  <ListItemText primary={category} />
                </ListItem>
              ))}
            </List>
          </Drawer>

          {/* Logo Link */}
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/">
              <img src={logo} alt="Hoarnest Logo" height="50" width="120" />
            </Link>
          </Box>

          {/* Wishlist Icon */}
          <IconButton color="inherit" aria-label="open wishlist">
            <FavoriteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
