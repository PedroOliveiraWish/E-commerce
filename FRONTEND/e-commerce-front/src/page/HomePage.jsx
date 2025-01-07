import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { userContext } from "../context/useContext";
import { useContext } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
    <div >
      <Header />
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

export default Home;
