import { useState, useContext } from "react";
import { userContext } from "../../context/useContext";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/esm/Stack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";

function Login({ toggleForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(userContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const userObject = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:3001/api/users/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userObject),
      });

      const data = await response.json();

      console.log(data);

      login(data.user);

      alert(data.message);

      if (data.user.email === "admin@gmail.com") {
        navigate("/Admin");
        return;
      }

      navigate("/Home");
    } catch (error) {
      console.error("Erro no login:", error);
      alert("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  return (
    <Container style={styles.container}>
      <h2 style={styles.title}>Welcome Back!</h2>
      <p style={styles.subtitle}>Sign in to continue your beauty journey.</p>
      <Form onSubmit={handleLogin} style={styles.form}>
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

        <Button type="submit" style={styles.button}>
          Login
        </Button>

        <Stack direction="horizontal" gap={2} className="mt-3" style={styles.stack}>
          <span style={styles.text}>Don't have an account?</span>
          <Button variant="link" onClick={toggleForm} style={styles.linkButton}>
            Register
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

export default Login;
