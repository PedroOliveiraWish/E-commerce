import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <Container>
        <Row>
          {/* About Us Section */}
          <Col md={4}>
            <h5 style={styles.title}>About Us</h5>
            <p style={styles.text}>
              Discover the finest beauty products curated with care and passion. Your beauty, our priority.
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col md={4}>
            <h5 style={styles.title}>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" style={styles.link}>Home</Nav.Link>
              <Nav.Link href="#" style={styles.link}>Shop</Nav.Link>
              <Nav.Link href="#" style={styles.link}>About Us</Nav.Link>
              <Nav.Link href="#" style={styles.link}>Contact</Nav.Link>
            </Nav>
          </Col>

          {/* Contact Section */}
          <Col md={4}>
            <h5 style={styles.title}>Contact Us</h5>
            <p style={styles.text}>Email: support@beautystore.com</p>
            <p style={styles.text}>Phone: +1 (123) 456-7890</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4">
            <p style={styles.copyright}>
              &copy; {new Date().getFullYear()} BeautyStore. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f8f9fa',
    padding: '2rem 0',
    marginTop: '2rem',
    borderTop: '1px solid #e7e7e7',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#333',
  },
  text: {
    fontSize: '0.9rem',
    color: '#555',
  },
  link: {
    fontSize: '0.9rem',
    color: '#555',
    textDecoration: 'none',
    marginBottom: '0.5rem',
  },
  copyright: {
    fontSize: '0.8rem',
    color: '#777',
    marginTop: '1rem',
  },
};

export default Footer;
