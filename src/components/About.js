import React from "react";
import Jarred from "../assets/Jarred.PNG"
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
const About = () => {
  return (
    <div>
      <div class="jumbotron">
      <Col xs={6} md={4}>
      <Image src={Jarred} roundedCircle />
    </Col>
        <h1 class="display-4">About Me</h1>
        <p class="lead">My name is Jarred Caris.</p>

        <p>
          I am a web developer, recently obtaining a certificate from the university of Adelaide for coding. I have over 15 years experience with large corporations and have a firm grasp on what businesses and consumers want in their online experiences. My love for technology and my creative mindset made web
          development the most logical and exciting pathway for me.
        </p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="https://github.com/Jarred-Caris" role="button">
            Jarreds Github
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
