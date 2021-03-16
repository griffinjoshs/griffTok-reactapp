import React from "react";
import { Jumbotron, Container, Col, Row } from 'react-bootstrap';
import "./styles/BottomSec.css";
// import BottomSecImage from "../BottomSec/BottomSecImage";
import { BiRightArrowCircle } from "react-icons/bi";
import { FaPatreon } from "react-icons/fa";
import Button from '../Button/Button'


// By importing the Header.css file, it is added to the DOM whenever this component loads

function BottomSecHome() {
    return (
        <Container fluid id="bottomSecPic" >
            <Row className="secHeader">
                <Col sm={12} lg={1}></Col>
                <Col sm={12} lg={5} id="secVidCol">
                    <br></br>
                    <div className='space' id='vidSpacer'></div>
                <iframe width="560" height="315" id='video' src="https://www.youtube.com/embed/8VcVeW9hAZ8" title='youtubeVideo' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col lg={1}></Col>
                <Col sm={12} lg={5} id="jumbtronColumn">
                    <Jumbotron>
                        <h2>Suport Me on Patreon</h2>
                        <br></br>
                        <p>
                        For those who really support me, if you would like to get the best from me possible, join my Patreon Community. You will get free Merchandise as well as access to unposted and removed videos!
                        </p>
                        <br></br>
                        <p>
                        <a href='#subscribeBtn'>
                        <Button>
                            Learn More <FaPatreon/></Button>
                        </a>
                        </p>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default BottomSecHome;
