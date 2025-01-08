import React, {useContext} from "react";
import { useLocation } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";

import { userContext } from "../../context/useContext";

const ProductCardDetail = () => {
  const location = useLocation();
  const { product } = location.state || {};

  const {user} = useContext(userContext);

  const handleAddToCart =  async () => {
    const cart = {
      product_foreign: product[0].id,
      user_foreign: user.id,
      quantity: 1
    }

    try {
      const response = await fetch('http://localhost:3001/api/carts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cart)
      })

      const data = await response.json()

      if (response.ok) {
        alert(data.message)
      }
    } catch (error) {
      console.error(error);
    }
  }

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <Container style={{ marginTop: "40px", padding: "20px" }}>
      <Card
        style={{
          border: "none",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
        }}
      >
        <Card.Img
          variant="top"
          src={product[0].image_url}
          alt={product[0].product_name}
          style={{
            height: "400px",
            objectFit: "cover",
            width: "50%",
            borderTopLeftRadius: "12px",
            borderBottomLeftRadius: "12px",
          }}
        />
        <Card.Body style={{ width: "50%", padding: "30px" }}>
          <Card.Title style={{ fontSize: "2rem", fontWeight: "bold", color: "#333" }}>
            {product[0].product_name}
          </Card.Title>
          <Card.Text style={{ fontSize: "1.1rem", color: "#555", marginBottom: "20px" }}>
            {product[0].product_description}
          </Card.Text>
          <div style={{ fontSize: "1.5rem", color: "#333", margin: "10px 0" }}>
            <strong>Preço:</strong> R$ {product[0].price}
          </div>
          <div style={{ fontSize: "1rem", color: "#777", marginBottom: "20px" }}>
            <span>✨ <strong>Estoque:</strong> {product[0].stock}</span><br />
            <span>📦 <strong>Categoria:</strong> {product[0].category}</span>
          </div>
          <Button
            style={{
              backgroundColor: "#ff69b4", // Rosa vibrante
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "12px 20px",
              fontSize: "1rem",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#ff1493")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#ff69b4")}
            onClick={() => handleAddToCart()}
          >
            Adicionar ao Carrinho
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductCardDetail;