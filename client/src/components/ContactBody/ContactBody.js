import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
import ContactForm from "../ContactForm/ContactForm";
import "./ContactBody.css";

function ContactBody() {
    return (
        <Container>
            <Row>
            <Col sm={12} lg={5}>

            </Col>
            <Col sm={12} lg={7}>
            </Col>
            </Row>
            <Row>
                <Col>
                <ContactForm/>
                </Col>
            </Row>
        </Container> 
)
}

export default ContactBody;
