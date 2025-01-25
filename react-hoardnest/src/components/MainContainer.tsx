import React from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Breadcrumbs,
  Link,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const products = [
  { id: 1, name: "Product 1", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product 2", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Product 3", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Product 4", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Product 5", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Product 6", image: "https://via.placeholder.com/150" },
  { id: 7, name: "Product 7", image: "https://via.placeholder.com/150" },
  { id: 8, name: "Product 8", image: "https://via.placeholder.com/150" },
  { id: 9, name: "Product 9", image: "https://via.placeholder.com/150" },
  { id: 10, name: "Product 10", image: "https://via.placeholder.com/150" },
  { id: 11, name: "Product 11", image: "https://via.placeholder.com/150" },
  { id: 12, name: "Product 12", image: "https://via.placeholder.com/150" },
  { id: 13, name: "Product 13", image: "https://via.placeholder.com/150" },
  { id: 14, name: "Product 14", image: "https://via.placeholder.com/150" },
  { id: 15, name: "Product 15", image: "https://via.placeholder.com/150" },
];

const MainContainer = () => {
  return (
    <Box sx={{ p: 2 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">Categories</Typography>
      </Breadcrumbs>

      {/* Header */}
      <Typography variant="h4" gutterBottom>
        Categories
      </Typography>
      <Divider sx={{ mb: 2 }} />

      {/* Products Grid */}
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid
            item
            key={product.id}
            xs={12} // Full width on extra small screens
            sm={6} // Two columns on small screens
            md={3} // Four columns on medium and larger screens
          >
            <Box
              sx={{
                border: "1px solid #ddd",
                borderRadius: 2,
                overflow: "hidden",
                textAlign: "center",
                backgroundColor: "#f9f9f9",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "auto" }}
              />
              <Box sx={{ p: 1 }}>
                <Typography variant="body1" gutterBottom>
                  {product.name}
                </Typography>
                <IconButton color="error" aria-label="delete" size="small">
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MainContainer;
