import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { userContext } from "../context/useContext";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import CardProduct from "../component/HomePage/CardProduct";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";

function Home() {
  const [products, setProducts] = useState([]);
  const { user, loading } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user === null) {
      navigate("/");
      return;
    }
  }, [loading, navigate, user]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center py-5">Loading...</div>;
  }

  return (
    <div className="bg-light">
      <Header />

      {/* Banner Section */}
      <section
        className="text-center py-5"
        style={{
          background: "linear-gradient(135deg, #6A0DAD, #FFC1E3)",
          color: "#FFFFFF",
        }}
      >
        <Container>
          <h2 className="display-4 fw-bold">
            Discover Our Exclusive Beauty Products
          </h2>
          <p className="fs-5">
            Quality products to enhance your natural beauty. Shop now and enjoy
            exclusive discounts!
          </p>
          <Button
            variant="light"
            size="lg"
            className="rounded-pill px-4 py-2"
            style={{
              color: "#fff",
              border: "2px solid #FF6FAE",
              background: "none",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#FF6FAE")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
          >
            Explore Now
          </Button>
        </Container>
      </section>

      {/* Product Section */}
      <Container className="py-5">
        <Row className="g-4">
          {products.map((product) => (
            <Col
              key={product.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="d-flex justify-content-center"
            >
              <CardProduct product={product} />
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default Home;
