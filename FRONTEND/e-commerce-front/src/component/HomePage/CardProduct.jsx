import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Stack,
} from "@mui/material";

const CardProduct = ({ product }) => {
  const navigate = useNavigate();

  const handleIdFromProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/api/products/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        navigate(`/product/${id}`, { state: { product: data } });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        sx={{
          boxShadow: 3,
          borderRadius: "12px",
          background: "#1E1E1E",
          color: "#6A0DAD",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          height="220"
          image={product.image_url}
          alt={product.product_name}
          sx={{
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            objectFit: "cover",
          }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            align="center"
            sx={{
              color: "#FF6FAE",
              fontWeight: "bold",
              marginBottom: 1,
            }}
          >
            {product.product_name}
          </Typography>
          <Typography
            variant="body2"
            align="center"
            color="#FF6FAE"
            sx={{ marginBottom: 2 }}
          >
            {product.product_description}
          </Typography>
          <Stack spacing={1} sx={{ marginBottom: 2 }}>
            <Typography variant="body2" align="center" color="#FF6FAE">
              <strong>✨ Stock:</strong> {product.stock}
            </Typography>
            <Typography variant="body2" align="center" color="#FF6FAE">
              <strong>📦 Category:</strong> {product.category}
            </Typography>
            <Typography variant="body2" align="center" color="#FF6FAE">
              <strong>💲 Price:</strong> ${product.price}
            </Typography>
          </Stack>
        </CardContent>
        <CardActions
          sx={{ justifyContent: "center" }}
          style={{ paddingBottom: "12px" }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF6FAE",
              fontWeight: 500,
              textTransform: "none",
              "&:hover": { backgroundColor: "#FF6FAE" },
            }}
            onClick={() => handleIdFromProduct(product.id)}
          >
            View Product
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default CardProduct;
