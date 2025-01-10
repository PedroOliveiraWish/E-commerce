import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { BsCart, BsPerson } from 'react-icons/bs';

function Header() {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" className="shadow-sm" style={styles.navbar}>
        <Container>
          <Navbar.Brand
            href="/home"
            style={styles.brand}
          >
            ✨ BeautyStore
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={styles.toggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Button
                variant="outline-light"
                onClick={() => navigate('/payment')}
                style={styles.button}
              >
                <BsPerson /> Payment
              </Button>
              <Button
                variant="outline-light"
                className="mx-2"
                style={styles.button}
              >
                <Nav.Link href="/" style={styles.navLink}>
                  <BsPerson /> Login
                </Nav.Link>
              </Button>
              <Button
                variant="light"
                onClick={() => navigate('/cart')}
                style={styles.cartButton}
              >
                <BsCart /> Cart
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Banner */}
      <div
        className="banner text-center text-white d-flex align-items-center justify-content-center"
        style={styles.banner}
      >
        <div>
          <h1 style={styles.bannerTitle}>Discover Your True Beauty ✨</h1>
          <p style={styles.bannerSubtitle}>
            Exclusive deals on the best beauty and skincare products.
          </p>
        </div>
      </div>
    </>
  );
}

// Styles
const styles = {
  navbar: {
    backgroundColor: '#1E1E1E', // Black background
  },
  brand: {
    color: '#FF6FAE', // Pink brand name
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  toggle: {
    backgroundColor: '#FF6FAE', // Pink toggle button
    border: 'none',
    color: '#FFFFFF', // White toggle icon
  },
  button: {
    color: '#FFFFFF', // White text
    borderColor: '#FF6FAE', // Pink outline
    backgroundColor: 'transparent',
    marginLeft: '8px',
    transition: 'all 0.3s',
  },
  navLink: {
    color: '#FFFFFF',
    textDecoration: 'none',
  },
  cartButton: {
    backgroundColor: '#FF6FAE', // Solid pink
    border: 'none',
    color: '#FFFFFF', // White text
    transition: 'all 0.3s',
  },
  banner: {
    backgroundImage:
      'url(https://wallpapers.com/images/hd/makeup-brush-powder-art-q4e4bg9wujkivnvk.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '450px',
    color: '#FFFFFF',
    // marginTop: '1px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#FF6FAE', // Pink title
    textShadow: '2px 2px #4E1182', // Violet shadow
  },
  bannerSubtitle: {
    fontSize: '1.2rem',
    marginTop: '10px',
    color: '#CCCCCC', // Light grey subtitle
  },
};

export default Header;
