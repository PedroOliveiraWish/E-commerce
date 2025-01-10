import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

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
        className="shadow-lg border-0 h-100"
        style={{
          background: "linear-gradient(135deg, #FFC1E3, #D1C4E9)", // Pink-violet gradient
          borderRadius: "12px",
          color: "#1E1E1E", // Black for text
        }}
      >
        <Card.Img
          variant="top"
          src={product.image_url}
          alt={product.product_name}
          style={{
            height: "220px",
            objectFit: "cover",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
          }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title
            className="text-center"
            style={{
              color: "#FF6FAE", // Bright pink for title
              fontWeight: "bold",
              fontSize: "1.25rem",
            }}
          >
            {product.product_name}
          </Card.Title>
          <Card.Text
            className="text-center"
            style={{
              color: "#6c757d", // Muted grey for description
              fontSize: "1rem",
              marginBottom: "1rem",
            }}
          >
            {product.product_description}
          </Card.Text>
          <Stack gap={2} className="my-3 text-center">
            <div style={{ color: "#495057" }}>
              <strong>✨ Stock:</strong> {product.stock}
            </div>
            <div style={{ color: "#495057" }}>
              <strong>📦 Category:</strong> {product.category}
            </div>
            <div style={{ color: "#495057" }}>
              <strong>💲 Price:</strong> ${product.price}
            </div>
          </Stack>
          <Button
            className="mt-auto"
            style={{
              backgroundColor: "#6A0DAD", // Deep violet
              border: "none",
              fontSize: "1rem",
              fontWeight: "500",
              transition: "background-color 0.3s ease-in-out",
            }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = "#4E1182") // Darker violet on hover
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = "#6A0DAD") // Original deep violet
            }
            onClick={() => handleIdFromProduct(product.id)}
          >
            View Product
          </Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default CardProduct;
