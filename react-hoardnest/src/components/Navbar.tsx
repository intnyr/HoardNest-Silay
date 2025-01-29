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
import LogoIcon from "../logo-icon.svg";
import TextLogo from "../text-logo.svg";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SearchAndCategories from "../components/SearchAndCategories";
import WishlistDrawer from "./WishlistDrawer";
import productImage1 from "../media/product-01.png";

const hoarnestTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fff",
    },
  },
});

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isWishlistOpen, setWishlistOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const generalLinks: { text: string; href?: string }[] = [
    { text: "Products", href: "/products" },
    { text: "About Us", href: "/about" },
    { text: "Contact", href: "/contact" },
  ];

  const categories: string[] = [
    "Furniture & Home Décor",
    "Kitchen & Dining",
    "Electronics & Gadgets",
    "Clothing & Accessories",
    "Books & Stationery",
    "Toys & Games",
    "Sporting Goods",
    "Baby & Kids",
    "Gardening & Outdoor",
    "Tools & Home Improvement",
    "Health & Personal Care",
    "Art & Collectibles",
    "Pet Supplies",
    "Hobby & DIY Supplies",
    "Seasonal Items",
    "Miscellaneous",
  ];

  // Function to format category links
  const formatCategoryLink = (category: string) => {
    return category
      .toLowerCase()
      .replace(/ /g, "-") // Replace spaces with "-"
      .replace(/&/g, "and"); // Replace "&" with "and"
  };

  const wishlistItems = [
    {
      id: 1,
      name: "Sports-casual mens moccasins without ties with print and inscription in white and black",
      image: productImage1,
      onRemove: (id: number) => alert(`Remove item with ID: ${id}`),
    },
    // Add more items as needed
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
            sx={{ mr: 2, color: "#9f4a23" }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Drawer */}
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box
              sx={{
                width: 250,
                display: "flex",
                flexDirection: "row", // Changed to row
                alignItems: "center",
                justifyContent: "space-between", // Ensures spacing between elements
                p: 2,
              }}
            >
              {/* Logo */}
              <Box>
                <Link to="/">
                  <img
                    src={TextLogo}
                    alt="Hoarnest Logo"
                    height="50"
                    width="120"
                  />
                </Link>
              </Box>

              {/* Close Menu Icon */}
              <IconButton onClick={toggleDrawer(false)} aria-label="Close Menu">
                <ChevronLeftIcon />
              </IconButton>
            </Box>

            <Divider />

            <List subheader={<ListSubheader>Menu</ListSubheader>}>
              {generalLinks.map((link, index) => (
                <ListItem
                  key={index}
                  component="a"
                  href={link.href}
                  sx={{
                    color: "#4e542e",
                  }}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText primary={link.text} />
                </ListItem>
              ))}
            </List>

            <Divider />

            <List subheader={<ListSubheader>Categories</ListSubheader>}>
              {categories.map((category, index) => (
                <ListItem
                  key={index}
                  component="a"
                  href={`/categories/${formatCategoryLink(category)}`}
                  sx={{
                    color: "#4e542e",
                  }}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText primary={category} />
                </ListItem>
              ))}
            </List>
          </Drawer>

          {/* Logo Link */}
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/">
              <img src={LogoIcon} alt="Hoarnest Logo" height="50" width="120" />
            </Link>
          </Box>

          {/* Wishlist Icon */}
          <IconButton
            color="inherit"
            aria-label="open wishlist"
            sx={{
              color: "#9f4a23",
            }}
            onClick={() => setWishlistOpen(true)}
          >
            <FavoriteIcon />
          </IconButton>
          <WishlistDrawer
            open={isWishlistOpen}
            onClose={() => setWishlistOpen(false)}
            wishlistItems={wishlistItems}
          />
        </Toolbar>
        {/* <SearchAndCategories /> */}
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
