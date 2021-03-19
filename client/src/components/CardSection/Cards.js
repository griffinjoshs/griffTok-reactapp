import React from "react";
import { Button } from "react-bootstrap";
import { BiRightArrowCircle } from "react-icons/bi";
import './Cards.css'

const Card = (props) => {
    const { Icon, Link, Header, Paragraph, ButtonText } = props
  return (
    <div>
      <div className="cardBox">
        <br></br>
        <i className="boxIcon">{Icon}</i>
        <br></br>
        <h3 className="boxHeader">{Header}</h3>
        <br></br>
        <p>{Paragraph}</p>
        <br></br>
        <a href={Link}>
        <Button className="cardBtn">
          {ButtonText} <BiRightArrowCircle />{" "}
        </Button>{" "}
        </a>
        <br></br>
      </div>
    </div>
  );
};

export default Card;
