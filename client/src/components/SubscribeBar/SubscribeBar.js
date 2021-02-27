import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SubscribeBar.css";
import { Container, Col, Row, Modal, Form } from "react-bootstrap";
import { FiRadio } from "react-icons/fi";
import Button from '../Button/Button'
import axios from 'axios'

function SubscribeBar() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    emailAddress: '',
      firstName: '',
      lastName: '',
      phone: ''
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeHandler = (event) => {
    setData({
        ...data,
        [event.target.name] : event.target.value
    })
}

const submitHandler = (event) => {
    event.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:8000/api/subscribers", data)
      .then((res) => {
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
    window.location.reload();
};

  return (
    <section className="subSection" id="subSection">
      <Container id="subBackground">
        <Row>
          <Col lg={2}></Col>
          <Col md={12} lg={8}>
            <h3>
              Get Free and Exclusive Access To 'TOP SECRET' Information by Subscribing to the Griff Gang! 
            </h3>
            <br></br>
            <div className="subscribeForm" id="subForm">
              <input name='emailAddress' type="text" id="subEmailInput" placeholder="Enter email" onChange={changeHandler} value={data.emailAddress}></input>
              <button onClick={handleShow} type="submit" id="subscribeBtn">
                Subscribe <FiRadio />
              </button>
            </div>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Container>
      {/* modal start */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className='modalBody'>
          <Form onSubmit={submitHandler}>
            <Form.Group>
              <Form.Control name='emailAddress' className='modalInput' id='emailAddress' type="text" placeholder="Enter email" onChange={changeHandler} value={data.emailAddress}/>
            </Form.Group>
            <Form.Group>
              <Form.Control name='firstName' className='modalInput' id='firstName' type="text" placeholder="Enter First Name" onChange={changeHandler} value={data.firstName}/>
            </Form.Group>
            <Form.Group>
              <Form.Control name='lastName' className='modalInput' id='lastName' type="text" placeholder="Enter Last Name" onChange={changeHandler} value={data.lastName}/>
            </Form.Group>
            <Form.Group>
              <Form.Control name='phoneNumber' className='modalInput' id='phoneNumber' type="text" placeholder="Enter Phone Number" onChange={changeHandler} value={data.phoneNumber}/>
            </Form.Group>
            <Button type="submit" className='btns'
    buttonStyle='btn--primary'
    buttonSize='btn--medium'
    linkTo='#subscribeBtn'>
              Submit
            </Button>
          </Form>{" "}
        </Modal.Body>
      </Modal>
      {/* modal end */}
    </section>
  );
}

export default SubscribeBar;

