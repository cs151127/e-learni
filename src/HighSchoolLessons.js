import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Courses() {
  const courses = [
    { id: 1, title: "BΙΟΛΟΓΙΑ Α ΛΥΚΕΙΟΥ", description: "Η βιολογία Α' λυκείου μελετά τη ζωή και τη λειτουργία των οργανισμών, την αναπαραγωγή, τη γενετική και την περιβαλλοντική επιστήμη.",  },
    { id: 2, title: "BΙΟΛΟΓΙΑ Β ΛΥΚΕΙΟΥ", description: "   Βιολογία Β' λυκείου: Ανατομία/φυσιολογία συστημάτων σώματος, γενετική, εξέλιξη, αλληλεπίδραση οργανισμών, περιβαλλοντική επιστήμη.            ", content: "Περιεχόμενο μαθήματος 2." },
    { id: 3, title: "BΙΟΛΟΓΙΑ Γ ΛΥΚΕΙΟΥ", description: "Η ιστορία Γ' λυκείου επικεντρώνεται στην ανατολική και δυτική Μεσογείο κατά την αρχαιότητα και τη μεταγενέστερη περίοδο. ", content: "Περιεχόμενο μαθήματος 3." },
    { id: 4, title: "ΙΣΤΟΡΙΑ Α ΛΥΚΕΙΟΥ", description: "Η ιστορία Γ' λυκείου επικεντρώνεται στην ανατολική και δυτική Μεσογείο κατά την αρχαιότητα και τη μεταγενέστερη περίοδο", content: "Περιεχόμενο μαθήματος 4." },
    { id: 5, title: "ΙΣΤΟΡΙΑ Β ΛΥΚΕΙΟΥ", description: "Η ιστορία Γ' λυκείου επικεντρώνεται στην ανατολική και δυτική Μεσογείο κατά την αρχαιότητα και τη μεταγενέστερη περίοδο.", content: "Περιεχόμενο μαθήματος 5." },
    { id: 6, title: "ΧΗΜΕΙΑ Α ΛΥΚΕΙΟΥ", description: "Η ιστορία Γ' λυκείου επικεντρώνεται στην ανατολική και δυτική Μεσογείο κατά την αρχαιότητα και τη μεταγενέστερη περίοδο", content: "Περιεχόμενο μαθήματος 6." },
    { id: 7, title: "ΧΗΜΕΙΑ Β ΛΥΚΕΙΟΥ", description: "Η ιστορία Γ' λυκείου επικεντρώνεται στην ανατολική και δυτική Μεσογείο κατά την αρχαιότητα και τη μεταγενέστερη περίοδο", content: "Περιεχόμενο μαθήματος 7." },
    { id: 8, title: "ΧΗΜΕΙΑ Γ ΛΥΚΕΙΟΥ", description: "Η ιστορία Γ' λυκείου επικεντρώνεται στην ανατολική και δυτική Μεσογείο κατά την αρχαιότητα και τη μεταγενέστερη περίοδο", content: "Περιεχόμενο μαθήματος 8." },
  ];
 
  return (
    <Container>
      <h2 className="mb-4">Μαθήματα Λυκείου</h2>
      <Row>
        {courses.slice(0, 4).map((course) => (
          <Col sm={6} md={4} lg={3} className="mb-4" key={course.id}>
            <Card>
            <Card.Img variant="top" src={require(`./images/${course.id}.jpg`)} />

              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                {course.id === 1 && <Card.Text>{course.content}</Card.Text>}
                <Link to={`/courses/${course.id}`} className="btn btn-primary">Προβολή Κεφαλαίων</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-4">
        {courses.slice(4).map((course) => (
          <Col sm={6} md={4} lg={3} className="mb-4" key={course.id}>
            <Card>
            <Card.Img variant="top" src={require(`./images/${course.id}.jpg`)} />

              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                <Link to={`/courses/${course.id}`} className="btn btn-primary">Προβολή Κεφαλαίων</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
  
         } export default Courses;