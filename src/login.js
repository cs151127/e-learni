import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Εδώ μπορείτε να προσθέσετε τον κώδικα για την υποβολή της φόρμας σύνδεσης
    console.log("Email:", email);
    console.log("Κωδικός:", password);
    // Επιπλέον λειτουργικότητα που επιθυμείτε
  };

  return (
    <div
      style={{
       
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container className="bg-white p-5">
        <h2 className="text-center mb-4">Σύνδεση</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Εισάγετε το email σας"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Κωδικός</Form.Label>
            <Form.Control
              type="password"
              placeholder="Εισάγετε τον κωδικό σας"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Σύνδεση
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default LoginForm;


