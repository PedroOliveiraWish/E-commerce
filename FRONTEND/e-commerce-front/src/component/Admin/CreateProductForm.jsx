import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/esm/Stack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CreateProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");

  const cleanForm = () => {
    setName("");
    setPrice("");
    setDescription("");
    setImage("");
    setCategory("");
    setStock("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const product = {
      product_name: name,
      price: price,
      product_description: description,
      image_url: image,
      category: category,
      stock: stock,
    };

    try {
      const response = await fetch("http://localhost:3001/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      const data = await response.json();

      alert(data.message);
    } catch (error) {
      console.error(error);
    }

    cleanForm();
  };

  return (
    <Container style={styles.container}>
      <h2 style={styles.title}>Create New Product</h2>
      <p style={styles.subtitle}>Fill in the details below to add a new product</p>
      <Form onSubmit={handleSubmit} style={styles.form}>
        <Form.Group controlId="formBasicName" style={styles.formGroup}>
          <Form.Label style={styles.label}>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the product's name"
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
        </Form.Group>

        <Form.Group controlId="formBasicDescription" style={styles.formGroup}>
          <Form.Label style={styles.label}>Product Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter the product's description"
            onChange={(e) => setDescription(e.target.value)}
            style={styles.input}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPrice" style={styles.formGroup}>
          <Form.Label style={styles.label}>Product Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter the product's price"
            onChange={(e) => setPrice(e.target.value)}
            style={styles.input}
          />
        </Form.Group>

        <Form.Group controlId="formBasicStock" style={styles.formGroup}>
          <Form.Label style={styles.label}>Product Stock</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter the product's stock"
            onChange={(e) => setStock(e.target.value)}
            style={styles.input}
          />
        </Form.Group>

        <Form.Group controlId="formBasicCategory" style={styles.formGroup}>
          <Form.Label style={styles.label}>Product Category</Form.Label>
          <Form.Select
            onChange={(e) => setCategory(e.target.value)}
            style={styles.input}
          >
            <option>Choose a category</option>
            <option value="skincare">Skincare</option>
            <option value="makeup">Makeup</option>
            <option value="hair">Hair</option>
            <option value="nail">Nail</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="formBasicImage" style={styles.formGroup}>
          <Form.Label style={styles.label}>Product Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the product's image URL"
            onChange={(e) => setImage(e.target.value)}
            style={styles.input}
          />
        </Form.Group>

        <Stack direction="horizontal" className="justify-content-center" style={styles.stack}>
          <Button variant="primary" type="submit" style={styles.button}>
            Create Product
          </Button>
        </Stack>
      </Form>
    </Container>
  );
};

// Inline Styles
const styles = {
  container: {
    maxWidth: "500px",
    margin: "3rem auto",
    padding: "2rem",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    color: "#4A4E69",
  },
  subtitle: {
    fontSize: "0.9rem",
    color: "#6D6875",
    marginBottom: "1.5rem",
  },
  form: {
    textAlign: "left",
  },
  formGroup: {
    marginBottom: "1rem",
  },
  label: {
    fontSize: "0.9rem",
    fontWeight: "500",
    color: "#4A4E69",
  },
  input: {
    padding: "0.6rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginTop: "0.3rem",
  },
  button: {
    width: "100%",
    backgroundColor: "#6D6875",
    borderColor: "#6D6875",
    padding: "0.6rem",
    fontSize: "1rem",
    marginTop: "1rem",
  },
  stack: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: "0.9rem",
    color: "#6D6875",
  },
  linkButton: {
    fontSize: "0.9rem",
    color: "#B5838D",
    textDecoration: "none",
  },
};

export default CreateProductForm;
