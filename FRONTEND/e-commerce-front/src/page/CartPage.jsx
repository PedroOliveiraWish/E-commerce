import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import CartCard from "../component/Cart/CartCard";

import { userContext } from "../context/useContext";

const CartPage = () => {
  const [carts, setCarts] = useState([]);
  const { user, loading } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getCarts = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/carts/${user.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        setCarts(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (!loading && user) {
      getCarts();
    }
  }, [setCarts, loading, user]);

  const handleRegisterOrder = async () => {
    let price = carts
      .reduce((acc, cart) => acc + parseFloat(cart.price) * cart.quantity, 0)
      .toFixed(2);

    const order = {
      user_foreign: user.id,
      price: price,
      carts: carts,
    };

    try {
      const response = await fetch("http://localhost:3001/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      className="h-100 h-custom"
      style={{ backgroundColor: "#eee", minHeight: "100vh" }}
    >
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard
              className="card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography
                          tag="h1"
                          className="fw-bold mb-0 text-black"
                        >
                          Shopping Cart
                        </MDBTypography>
                        <MDBTypography className="mb-0 text-muted">
                          {carts.length} items
                        </MDBTypography>
                      </div>

                      <hr className="my-4" />

                      {carts.map((cart) => {
                        return <CartCard key={cart.id} cart={cart} />;
                      })}

                      <hr className="my-4" />

                      <div className="pt-5">
                        <MDBTypography tag="h6" className="mb-0">
                          <MDBCardText
                            tag="a"
                            href="#!"
                            className="text-body"
                            onClick={() => navigate("/home", { replace: true })}
                          >
                            <MDBIcon fas icon="long-arrow-alt-left me-2" /> Back
                            to shop
                          </MDBCardText>
                        </MDBTypography>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography
                        tag="h3"
                        className="fw-bold mb-5 mt-2 pt-1"
                      >
                        Summary
                      </MDBTypography>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <MDBTypography tag="h5" className="text-uppercase">
                          items {carts.length}
                        </MDBTypography>
                        <MDBTypography tag="h5">
                          R${" "}
                          {carts
                            .reduce(
                              (acc, cart) =>
                                acc + parseFloat(cart.price) * cart.quantity,
                              0
                            )
                            .toFixed(2)}
                        </MDBTypography>
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Total price
                        </MDBTypography>
                        <MDBTypography tag="h5">
                          R${" "}
                          {carts
                            .reduce(
                              (acc, cart) =>
                                acc + parseFloat(cart.price) * cart.quantity,
                              0
                            )
                            .toFixed(2)}
                        </MDBTypography>
                      </div>

                      <MDBBtn
                        color="dark"
                        block
                        size="lg"
                        onClick={handleRegisterOrder}
                      >
                        Place order
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default CartPage;
