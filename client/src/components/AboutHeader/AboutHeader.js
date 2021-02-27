import React from "react";
import { Jumbotron, Container, Col, Row } from 'react-bootstrap';
import "../Header/Header.css";
import "../BottomSec/styles/BottomSec.css";
import BottomSecImage from "../BottomSec/BottomSecImage";
import Button from '../Button/Button'

// By importing the Header.css file, it is added to the DOM whenever this component loads
const styles = {
  topSpace: {
    "padding-top": "50px"
  }
}

function AboutHeader() {
  return ( 
    <Container fluid id="homeFront">
    <div style={styles.topSpace}></div>
  <Row className="header">
  <Col lg={1}></Col>
    <Col sm={12} lg={5} id="jumbtronColumnAbout"> <Jumbotron id="homeFrontJumbotron" >
    <br></br>
    <br></br>
    <h1 className="about">About Me</h1>
    <br></br>
  <p className="aboutP">I am Griffin Joshs, A TikToker, Podcaster and Twitch Streamer! If your reading this, Ik u hella real! Thanks for riding with me to almost 300k! It's been a dream come true to grow this big on social media. You guys are the reason this dream has come true! I try to talk to my supporters and fans as much as possible so if you have a question, need advice, want to show me a meme, or just want to say hi feel free to DM me on Instagram! I also do promos so if you want a shoutout hit me up!</p>
<br></br>
    <Row className="mb-2" id="btn">
    <Col sm={12} xl={6}>
    <br className="btnSpace"></br>
    </Col>
    </Row>
  </Jumbotron></Col>
  {/* <Col lg={1}></Col> */}
  <Col sm={12} lg={6} id="imgCol">
      <BottomSecImage />
      </Col>
  </Row>
  </Container>
  );
}

export default AboutHeader;
