import React from 'react';

import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { BsCart, BsPerson } from 'react-icons/bs';

function Header() {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="/">✨ BeautyStore</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Button variant="outline-dark" className="me-2">
             <Nav.Link href='/'><BsPerson /> Login</Nav.Link>
            </Button>
            <Button variant="dark">
              <BsCart /> Cart
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Banner */}
      <div className="banner text-center text-white d-flex align-items-center justify-content-center" style={bannerStyle}>
        <div>
          <h1>Discover Your True Beauty ✨</h1>
          <p>Exclusive deals on the best beauty and skincare products.</p>
          <Button variant="light" size="lg">Shop Now</Button>
        </div>
      </div>
    </>
  );
}

// Banner Inline Styles
const bannerStyle = {
  backgroundImage: 'url(https://wallpapers.com/images/hd/makeup-brush-powder-art-q4e4bg9wujkivnvk.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '450px',
  marginTop: '1px'
};

export default Header;
