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
        <h1 class="display-4">Contact Me</h1>
        <p class="lead">
          Please use any of the following if you have any further questions.
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
                  <Button variant="primary" href="tel:0423013649" >Call me</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Email} />
                <Card.Body>
                  <Card.Title>Email</Card.Title>
                  <Card.Text>
                    jarred.caris@gmail.com
                  </Card.Text>
                  <Button variant="primary" href="mailto:jarred.caris@gmail.com">Email me</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Linkedin} />
                <Card.Body>
                  <Card.Title>Linkedin</Card.Title>
                  <Card.Text>
                   https://www.linkedin.com/in/jarred-caris-5451aa194/
                  </Card.Text>
                  <Button variant="primary" href="https://www.linkedin.com/in/jarred-caris-5451aa194/">Go to my Linkedin</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Github} />
                <Card.Body>
                  <Card.Title>Github</Card.Title>
                  <Card.Text>
                    https://github.com/Jarred-Caris
                  </Card.Text>
                  <Button variant="primary" href="https://github.com/Jarred-Caris">View my Github</Button>
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
