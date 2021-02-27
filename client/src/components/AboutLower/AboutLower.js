import React from "react";
import { Jumbotron, Container, Col, Row } from 'react-bootstrap';
import "../BottomSec/styles/BottomSec.css";
import { FiRadio } from "react-icons/fi";
import BottomSecImage from "../BottomSec/BottomSecImage";
import Button from '../Button/Button'

// By importing the Header.css file, it is added to the DOM whenever this component loads

const EstimatedFollowers = '300k'

function AboutLower() {
  return ( 
    <div>
    <Container fluid id="homeFront" >
  <Row className="header">
  <Col lg={1}></Col>
  <Col sm={12} lg={5} id="imgCol">
      <BottomSecImage />
      </Col>
      <Col sm={12} lg={5} id="jumbtronColumnAbout"> <Jumbotron id="homeFrontJumbotron" >
    <br></br>
    <br></br>
    <h1 className="about">About Me</h1>
    <br></br>
    <p className="aboutP">Let Me start By Saying How Greatful I am to be in this Position! Almost {EstimatedFollowers}! Not only 4 years ago I barely had one friend! In the last few years I have grown not just in Followers but as a person and built myself up to gain the confidence to put out the content you know today!</p>
<br></br>
    <Row className="mb-2" id="btn">
    <Col sm={12} xl={6}>
    <br className="btnSpace"></br>
    <a href='/#subscribeBtn'>
    <Button
    className='btns'
    buttonStyle='btn--outline'
    buttonSize='btn--large'>
      <FiRadio/> Subscribe 
    </Button>
    </a>
    </Col>
    </Row>
  </Jumbotron>
  </Col>
      <Col lg={1}></Col>
  </Row>
  <div className="space"></div>
  </Container>
  </div>
  );
}

export default AboutLower;
