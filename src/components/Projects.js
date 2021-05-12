import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Trailer from "../assets/project.PNG";
import Workout from "../assets/tracker.PNG";
import Budget from "../assets/budget.PNG";


const Projects = () => {
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
         <Card.Img variant="top" src= {Trailer} />
          <Card.Body>
            <Card.Title>Trailer Sailor</Card.Title>
            <Card.Text>
            A Movie search app using IMDB API to pull movie information and the trailer for that movie.
            </Card.Text>
            <Button variant="primary" href="https://github.com/Jarred-Caris/Trailer-Sailor">View Repository</Button>
          </Card.Body>
        </Card> 
            </Col>
            <Col>
            <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Workout}/>
          <Card.Body>
            <Card.Title>Workout Tracker</Card.Title>
            <Card.Text>
              Workout tracker using MongDB and Mongoose to record fitness sessions.
            </Card.Text>
            <Button variant="primary" href="https://github.com/Jarred-Caris/workout_tracker">View Repository</Button>
          </Card.Body>
        </Card>
            </Col>
            <Col>
            <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Budget}/>
          <Card.Body>
            <Card.Title>Budget Tracker</Card.Title>
            <Card.Text>
            A budget tracker that can be used offline and updates once back online Using indexedDB.
            </Card.Text>
            <Button variant="primary" href="https://github.com/Jarred-Caris/Budget_Tracker">View Repository</Button>
          </Card.Body>
        </Card>
            </Col>

            </Row>
           
        </Container>
        
       
        
      </div>
    </div>
  );
};

export default Projects;
