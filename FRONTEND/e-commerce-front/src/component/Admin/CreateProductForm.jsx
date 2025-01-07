import React, {useState} from "react";

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
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const product = {
      product_name: name,
      price: price,
      product_description: description,
      image_url: image,
      category: category,
      stock: stock
    }

    try {
      const response = await fetch('http://localhost:3001/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product)
      })

      const data = await response.json()

      alert(data.message)
    } catch (error) {
      console.error(error)
    }

    cleanForm()
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Enter the product's name" onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicDescription">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter the product's description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPrice">
          <Form.Label>Product Price</Form.Label>
          <Form.Control type="number" placeholder="Enter the product's price" onChange={(e) => setPrice(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicStock">
          <Form.Label>Product Stock</Form.Label>
          <Form.Control type="number" placeholder="Enter the product's stock" onChange={(e) => setStock(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicCategory">
          <Form.Select onChange={(e) => setCategory(e.target.value)}>
            <option>Choose a category</option>
            <option value="skincare">skincare</option>
            <option value="makeup">makeup</option>
            <option value="hair">hair</option>
            <option value="nail">nail</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="formBasicImage">
          <Form.Label>Product Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the product's image URL"
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group>

        <Stack>
          <Button variant="primary" type="submit">
            Create Product
          </Button>
        </Stack>
      </Form>
    </Container>
  );
};

export default CreateProductForm;