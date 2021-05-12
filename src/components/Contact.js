import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Phone from "../assets/phone.jpg";
import Email from "../assets/email.jpg";
import Linkedin from "../assets/linkdin.png";
import Github from "../assets/git.jpg";


const Contact = () => {
  return (
    <div>
      <div class="jumbotron">
        <h1 class="display-4">Projects Completed</h1>
        <p class="lead">
          A Brief overview of some of the projects completed in my studies
        </p>
        <Container>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Phone} />
                <Card.Body>
                  <Card.Title>Phone Number</Card.Title>
                  <Card.Text>
                    0423013649
                  </Card.Text>
                  <Button variant="primary">View Repository</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>Workout Tracker</Card.Title>
                  <Card.Text>
                    Workout tracker using MongDB and Mongoose to record fitness
                    sessions.
                  </Card.Text>
                  <Button variant="primary">View Repository</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>Budget Tracker</Card.Title>
                  <Card.Text>
                    A budget tracker that can be used offline and updates once
                    back online Using indexedDB.
                  </Card.Text>
                  <Button variant="primary">View Repository</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>Budget Tracker</Card.Title>
                  <Card.Text>
                    A budget tracker that can be used offline and updates once
                    back online Using indexedDB.
                  </Card.Text>
                  <Button variant="primary">View Repository</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
