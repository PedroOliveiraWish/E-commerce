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
    <Container style={styles.container}>
      <h2 style={styles.title}>Create Your Account</h2>
      <p style={styles.subtitle}>Join us and explore the world of beauty!</p>
      <Form style={styles.form}>
        <Form.Group controlId="formBasicUsername" style={styles.formGroup}>
          <Form.Label style={styles.label}>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail" style={styles.formGroup}>
          <Form.Label style={styles.label}>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" style={styles.formGroup}>
          <Form.Label style={styles.label}>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handleSign();
          }}
          style={styles.button}
        >
          Register
        </Button>

        <Stack direction="horizontal" gap={2} className="mt-3" style={styles.stack}>
          <span style={styles.text}>Already have an account?</span>
          <Button variant="link" onClick={toggleForm} style={styles.linkButton}>
            Login
          </Button>
        </Stack>
      </Form>
    </Container>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
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
  },
  button: {
    width: "100%",
    backgroundColor: "#6D6875",
    borderColor: "#6D6875",
    padding: "0.6rem",
    fontSize: "1rem",
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

export default Sign;
