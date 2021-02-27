import React, { useState, useEffect } from "react";
import { Container, Col, Row } from 'react-bootstrap';
import "../Header/Header.css";
import "./CardSection.css";
import Cards from './Cards'
// import { SiTiktok } from "react-icons/si";
import CardData from './CardContent'

// By importing the Header.css file, it is added to the DOM whenever this component loads

function BoxSection() {
    const [cardContent, setCardContent] = useState(CardData);
  useEffect(() => {
  setCardContent(CardData)
},[])

  return ( 
        <section className="boxSection">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Container>
                <Row>
                {cardContent.map((card, i) => (
                    <Col md={12} lg={4} key={card.id}>
                        <Cards
                        Icon = {card.Icon}
                        Link = {card.Link}
                        Header = {card.Header}
                        Paragraph = {card.Paragraph}
                        ButtonText = {card.Button}
                        />
                    </Col>
                ))}
                </Row>
            </Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </section>
  );
}

export default BoxSection;
