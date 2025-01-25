import React from "react";
import {
  Box,
  InputBase,
  Typography,
  Link,
  List,
  ListItem,
  ListSubheader,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchAndCategories: React.FC = () => {
  const categories = [
    { name: "Rucksäcke", link: "/rucksaecke/" },
    { name: "Geldbörsen & Etuis", link: "/geldboersen-etuis/" },
    { name: "Umhängetaschen", link: "/umhaengetaschen/" },
    { name: "Handtaschen", link: "/handtaschen/" },
    { name: "Beuteltaschen", link: "/beuteltaschen/" },
    { name: "Shopper", link: "/shopper/" },
    { name: "Koffer", link: "/koffer/" },
    { name: "Luxustaschen", link: "/luxustaschen/" },
    { name: "Marken", link: "/marken/" },
    { name: "Sale", link: "/sale/" },
  ];

  return (
    <Box sx={{ p: 2 }}>
      {/* Search Section */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder="Hier Tasche suchen..."
          type="text"
          aria-label="Suche"
          fullWidth
          sx={{
            ml: 1,
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            borderRadius: 1,
            px: 2,
          }}
        />
      </Box>

      {/* Navigation Menu */}
      <nav>
        <List
          subheader={
            <ListSubheader component="div" sx={{ fontWeight: "bold" }}>
              Kategorien
            </ListSubheader>
          }
        >
          {categories.map((category, index) => (
            <ListItem key={index} disablePadding>
              <Link
                href={category.link}
                underline="hover"
                color="primary"
                sx={{ textDecoration: "none", width: "100%" }}
              >
                <Typography variant="body1" gutterBottom>
                  {category.name}
                </Typography>
              </Link>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};

export default SearchAndCategories;
