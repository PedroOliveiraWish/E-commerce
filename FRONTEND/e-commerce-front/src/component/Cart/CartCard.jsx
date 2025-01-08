import React, {useState, useEffect} from "react";

import {
  MDBBtn,
  MDBCardImage,
  MDBCol,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const CartCard = ({cart}) => {
  const [quantity , setQuantity] = useState(cart.quantity);
  const [price, setPrice] = useState(cart.price);

  useEffect(() => {
    const updatePrice = () => {
      setPrice(price * quantity);
    }

    updatePrice()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const cartFetchMore = {
    id: cart.cart_id,
    quantity: quantity + 1
  }

  const cartFetchLess = {
    id: cart.cart_id,
    quantity: quantity - 1
  }


  const updateQuantityMore = async () => {
    setQuantity(quantity + 1);

    try {
      const response = await fetch(`http://localhost:3001/api/carts/${cart.cart_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartFetchMore),
      })

      const data = await response.json()

      if (response.ok) {
        console.log(data)
      }

    } catch (error) {
      console.error(error);
    }

    window.location.reload();

  }

  const updateQuantityLess = async () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }

    try {
      const response = await fetch(`http://localhost:3001/api/carts/${cart.id}`, {
        method: "PUT",
         headers: {
          "Content-Type": "application/json",
         },
         body: JSON.stringify(cartFetchLess)
      })

      const data = await response.json()

      if (response.ok) {
        console.log(data)
      }
    } catch (error) {
      console.error(error);
    }

    window.location.reload();
  }

  const deleteCart = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/carts/${cart.cart_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      })

      const data = await response.json()
      if (response.ok) {
        console.log(data)
      }
    } catch (error) {
      console.error(error);
    }

    window.location.reload()
  }

  return (
    <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
      <MDBCol md="2" lg="2" xl="2">
        <MDBCardImage
          src={cart.image_url}
          fluid
          className="rounded-3"
          alt={cart.product_name}
        />
      </MDBCol>
      <MDBCol md="3" lg="3" xl="3">
        <MDBTypography tag="h6" className="text-muted">
          {cart.category}
        </MDBTypography>
        <MDBTypography tag="h6" className="text-black mb-0">
          {cart.product_name}
        </MDBTypography>
      </MDBCol>
      <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
        <MDBBtn color="link" className="px-2" onClick={updateQuantityLess}>
          <MDBIcon fas icon="minus" />
        </MDBBtn>

        <div>{quantity}</div>

        <MDBBtn color="link" className="px-2" onClick={updateQuantityMore}>
          <MDBIcon fas icon="plus" />
        </MDBBtn>
      </MDBCol>
      <MDBCol md="3" lg="2" xl="2" className="text-end">
        <MDBTypography tag="h6" className="mb-0">
          R$ {price}
        </MDBTypography>
      </MDBCol>
      <MDBCol md="1" lg="1" xl="1" className="text-end">
        <a href="#!" className="text-muted" onClick={deleteCart}>
          <MDBIcon fas icon="times" />
        </a>
      </MDBCol>
    </MDBRow>
  );
};

export default CartCard;
