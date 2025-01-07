import { useState } from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/esm/Stack";
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";

function Sign({ toggleForm }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const cleanForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const handleSign = async () => {
    const userObject = {
      username: username,
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:3001/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userObject),
      });

      const data = await response.json();

      alert(data.message);

      cleanForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className="container-sigin">
      <Form>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handleSign();
          }}
        >
          Register
        </Button>

        <Stack>
          already have an account?
          <Button onClick={toggleForm}>Login</Button>
        </Stack>
      </Form>
    </Container>
  );
}

export default Sign;
