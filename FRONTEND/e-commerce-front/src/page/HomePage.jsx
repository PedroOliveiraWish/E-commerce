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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />

      {/* Intermediate Section */}
      <section style={styles.bannerSection}>
        <Container className="text-center py-5">
          <h2 style={styles.bannerTitle}>Discover Our Exclusive Beauty Products</h2>
          <p style={styles.bannerSubtitle}>
            Quality products to enhance your natural beauty. Shop now and enjoy exclusive discounts!
          </p>
          <Button variant="light" size="md" style={{border: '1px solid #ff9a9e', padding: '.5rem 1rem', background:'none', color: '#ff9a9e'}}>Explore Now</Button>
        </Container>
      </section>

      {/* Product Section */}
      <Container>
        <Row className="d-flex">
          {products.map((product) => (
            <Col
              key={product.id}
              className="d-flex justify-content-center my-3"
              xs={12}
              sm={6}
              md={4}
              lg={3}
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

const styles = {
  bannerSection: {
    background: '#fffffff0',
    color: '#ff9a9e',
    textAlign: 'center',
    margin: '1rem 0'
  },
  bannerTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
  },
  bannerSubtitle: {
    fontSize: '1.2rem',
    marginBottom: '1.5rem',
  },
};

export default Home;
