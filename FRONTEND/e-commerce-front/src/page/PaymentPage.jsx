import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";

import { userContext } from "../context/useContext";
import PaymentCard from "../component/Payment/PaymentCard";

import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { loading } = useContext(userContext);

  return (
    <div className="payment-page">
      <Header />
      
    <Container className="py-5">
      <Row className="">
        <Col>
          {!loading ? (
            <div className="text-center">
              <h4 className="mb-3">
                <FontAwesomeIcon icon={faCreditCard} className="me-2" />
                Payment Details
              </h4>
              <PaymentCard />
            </div>
          ) : (
            !loading && (
              <Alert variant="info" className="text-center">
                <h4>No order details available.</h4>
              </Alert>
            )
          )}
        </Col>
      </Row>


      <Row className="justify-content-center mt-4">
        <Col xs="auto">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => navigate("/home")}
          >
            <FontAwesomeIcon icon={faHome} className="me-2" />
            Back to Home
          </Button>
        </Col>
      </Row>
    </Container>
    <Footer />
    </div>
  );
};

export default PaymentPage;
