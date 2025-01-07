import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

const cardStyles = {
  container: {
    overflow: "hidden",
    borderRadius: "12px",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    background: "#fff5f8",
    border: "none",
    boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.062)",
  },
  containerHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  },
  image: {
    height: "220px",
    objectFit: "cover",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#d63384",
    marginBottom: "8px",
  },
  description: {
    fontSize: "0.95rem",
    color: "#6c757d",
    marginBottom: "12px",
  },
  details: {
    fontSize: "0.9rem",
    color: "#495057",
    marginBottom: "4px",
  },
  button: {
    backgroundColor: "#d63384",
    border: "none",
    transition: "background-color 0.3s ease-in-out",
  },
  buttonHover: {
    backgroundColor: "#bd2c74",
  },
};

const CardProduct = ({ product }) => {
  return (
    <Card
      key={product.id}
      style={cardStyles.container}
      className="product-card"
    >
      <Card.Img
        variant="top"
        src={product.image_url}
        alt={product.product_name}
        style={cardStyles.image}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title style={cardStyles.title}>{product.product_name}</Card.Title>
        <Card.Text style={cardStyles.description}>
          {product.product_description}
        </Card.Text>
        <Stack className="mb-3">
          <span style={cardStyles.details}>✨ <strong>Stock:</strong> {product.stock}</span>
          <span style={cardStyles.details}>📦 <strong>Category:</strong> {product.category}</span>
          <span style={cardStyles.details}>💲 <strong>Price:</strong> ${product.price}</span>
        </Stack>
        <Button
          style={cardStyles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = cardStyles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = cardStyles.button.backgroundColor)}
        >
          View Product
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardProduct;
