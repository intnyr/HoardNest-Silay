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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SearchAndMenu: React.FC = () => {
  const categories = [
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 15, // Adjust for visible items
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 11,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 9,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Box sx={{ p: 2 }}>
      {/* Search Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          borderRadius: 2,
          px: 1,
          py: 0.5,
          mb: 1,
        }}
      >
        <IconButton sx={{ color: "inherit", p: 1 }}>
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder="Find your favorite now..."
          type="text"
          aria-label="Search Favorite"
          fullWidth
          sx={{
            ml: 1,
            backgroundColor: "transparent",
          }}
        />
      </Box>

      {/* Navigation Menu */}
      <Slider {...settings}>
        {categories.map((category, index) => (
          <Box
            key={index}
            sx={{
              margin: "0 15px",
              p: 1,
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Link
              href={`/categories/${formatCategoryLink(category)}`}
              underline="hover"
              color="#4e542e"
              sx={{
                minWidth: 100,
                maxWidth: 250,
                textDecoration: "none",
                backgroundColor: "#e7dbcd",
                height: 50,
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                borderRight: "2px solid #ccc",
                padding: "0 16px",
                pt: 0.75,
              }}
            >
              <Typography
                variant="body2"
                gutterBottom
                sx={{
                  lineHeight: "1.25",
                  textAlign: "center",
                }}
              >
                {category}
              </Typography>
            </Link>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SearchAndMenu;
