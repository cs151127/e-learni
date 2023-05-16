import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Εδώ μπορείτε να προσθέσετε τον κώδικα για την υποβολή της φόρμας εγγραφής
    console.log("Όνομα:", name);
    console.log("Email:", email);
    console.log("Κωδικός:", password);
    // Επιπλέον λειτουργικότητα που επιθυμείτε
  };

  return ( <div
    style={{
     
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Container>
      <h2>Φόρμα Εγγραφής Χρήστη</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Όνομα</Form.Label>
          <Form.Control
            type="text"
            placeholder="Εισάγετε το όνομά σας"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

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

        <Button variant="primary" type="submit">
          Εγγραφή
        </Button>
      </Form>
    </Container>
    </div>
  );
};

export default RegistrationForm;

