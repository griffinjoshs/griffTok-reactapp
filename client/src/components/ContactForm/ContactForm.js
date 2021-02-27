import React, { useState } from "react";
import "./ContactForm.css";
import { FiSend } from "react-icons/fi";
import axios from "axios";
import { Form } from "react-bootstrap";
import Button from "../Button/Button";

function ContactForm() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [thanks, setThanks] = useState({
    active: false,
    message: "",
  });

  const changeHandler = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
    // console.log("********DATA INSIDE CHANGE HANDLER *******");
    // console.log(data);
  };
  // console.log(data);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("data object");
    axios
      .post("http://localhost:8000/api/subscribers", data)
      .then((res) => {
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
    setData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setThanks({
      active: true,
      message: "Thank you for contacting me!",
    });
    window.location.reload();
  };

  return (
    <div className="contact-section">
      <br></br>
      <br></br>
      <h1>Contact Me</h1>
      <div class="border"></div>
      {thanks.active ? (
        <div>{thanks.message}</div>
      ) : (
        <Form className="contact-form" onSubmit={submitHandler}>
          {/* <div className="form-group container p-5" id='inputContainer'> */}
          <input
            className="contact-form-text"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            onChange={changeHandler}
            value={data.firstName}
          />
          <input
            className="contact-form-text"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            onChange={changeHandler}
            value={data.lastName}
          />
          <input
            className="contact-form-text"
            type="text"
            name="emailAddress"
            id="emailAddress"
            placeholder="Email"
            onChange={changeHandler}
            value={data.emailAddress}
          />
          <input
            className="contact-form-text"
            type="text"
            name="phone"
            id="number"
            placeholder="Phone Number"
            onChange={changeHandler}
            value={data.phone}
          />
          <input
            className="contact-form-text"
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            onChange={changeHandler}
            value={data.subject}
          />
          <textarea
            className="contact-form-text"
            type="text"
            name="message"
            id="message"
            placeholder="Message"
            onChange={changeHandler}
            value={data.message}
          />
          <Button
            type="submit"
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--sortawide"
          >
            Send <FiSend />
          </Button>
        </Form>
        // </div>
      )}
    </div>
  );
}

export default ContactForm;
