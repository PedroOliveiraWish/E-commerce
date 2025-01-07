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
        return
      }

      navigate("/Home");
    } catch (error) {
      console.error("Erro no login:", error);
      alert("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  return (
    <Container className="container-login">
      <Form onSubmit={handleLogin}>
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

        <Button variant="primary" type="submit">
          Login
        </Button>

        <Stack>
          Don't have an account?
          <Button onClick={toggleForm}>Register</Button>
        </Stack>
      </Form>
    </Container>
  );
}

export default Login;
