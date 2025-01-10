import React, { useState, useContext, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBTypography,
  MDBContainer,
  MDBBtn,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import { userContext } from "../../context/useContext";
import { format } from "date-fns";

import LoadingComponent from "./PaymentLoading";

const PaymentCard = () => {
  const [orders, setOrders] = useState([]);
  const [loadingPay, setLoadingPay] = useState(false);
  const { user, loading } = useContext(userContext);

  useEffect(() => {
    const getOrder = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/orders/${user.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (response.ok) {
          setOrders(data);
        } else {
          console.error("Failed to fetch order details:", data.message);
        }
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    };

    if (!loading && user) {
      getOrder();
    }
  }, [loading, user]);

  const handlePayment = (id) => {
    setLoadingPay(true);

    const order = orders.find((order) => order.id === id);

    if (order.status_order === "success") {
      alert("Payment already made");
      setLoadingPay(false);
      return;
    }

    setTimeout(async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/orders`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id }),
        });

        const data = await response.json();

        setLoadingPay(false);

        if (response.ok) {
          alert("Payment successful!");
          window.location.reload();
        } else {
          console.error("Payment failed:", data.message);
        }
      } catch (error) {
        setLoadingPay(false);
        console.error("Error processing payment:", error);
      }
    }, 3000);
  };

  const formatDate = (dateString) => {
    return format(new Date(dateString), "dd MMMM yyyy, HH:mm");
  };

  return (
    <MDBContainer className="py-4">
      <Row>
        {orders.map((order) => (
          <Col xs={12} sm={6} md={4} key={order.id} className="mb-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <MDBCard className="shadow-sm">
                <MDBCardBody className="py-4 px-3">
                  <MDBTypography tag="h5" className="text-center mb-3">
                    Order Details
                  </MDBTypography>
                  <hr />

                  <div className="d-flex justify-content-between mb-3">
                    <MDBTypography tag="h6" className="fw-bold">
                      Order ID:
                    </MDBTypography>
                    <MDBTypography tag="h6">{order.id}</MDBTypography>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <MDBTypography tag="h6" className="fw-bold">
                      Total Price:
                    </MDBTypography>
                    <MDBTypography tag="h6">
                      R$ {parseFloat(order.total_price).toFixed(2)}
                    </MDBTypography>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <MDBTypography tag="h6" className="fw-bold">
                      Status:
                    </MDBTypography>
                    <MDBTypography
                      tag="h6"
                      className={
                        order.status_order === "success"
                          ? "text-success"
                          : "text-warning"
                      }
                    >
                      {order.status_order === "success"
                        ? "Paid"
                        : "Pending Payment"}
                    </MDBTypography>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <MDBTypography tag="h6" className="fw-bold">
                      Created At:
                    </MDBTypography>
                    <MDBTypography tag="h6">
                      {formatDate(order.created_at)}
                    </MDBTypography>
                  </div>

                  {/* Payment Button */}
                  <div className="text-center mt-4">
                    <MDBBtn
                      color={order.status_order === "success" ? "secondary" : "success"}
                      size="lg"
                      onClick={() => handlePayment(order.id)}
                      disabled={loadingPay || order.status_order === "success"}
                    >
                      {loadingPay ? (
                        <>
                          <MDBSpinner size="sm" role="status" tag="span" className="me-2" />
                          Processing...
                        </>
                      ) : order.status_order === "success" ? (
                        "Order Paid"
                      ) : (
                        "Pay Now"
                      )}
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </motion.div>
          </Col>
        ))}
      </Row>
      <LoadingComponent loading={loadingPay} />
    </MDBContainer>
  );
};

export default PaymentCard;
