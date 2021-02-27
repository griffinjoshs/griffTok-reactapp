import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
import "../styles/infoSection.css";

function infoSection() {
    return (
        <section className="info">
            <Container>
                <Row className="infoRow">
                    <Col md={12} lg={4}>
                        <h2 id="infoH2"><strong>Somehow You Found My Website</strong></h2>
                    </Col>
                    <Col lg={1}></Col>
                    <Col md={12} lg={7}>
                        <p className="infoText">Thank ya'll for the tremendous support over the last year! Make sure to Subscribe and check out my merchandise! And yes I built this site myself.</p>
                    </Col>
                </Row>
            </Container>
      </section>
    );
  }
  
  export default infoSection;