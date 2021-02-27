import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Modal, Button, Form } from "react-bootstrap";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import "./styles/Admin.css";

const Admin = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [load, setLoad] = useState(1);
  const [subscriber, setSubscriber] = useState({
    _id: '',
    firstName: "",
    lastName: "",
    emailAddress: "",
    subject: "",
    message: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Subscribers")
      .then((res) => {
        console.log(res.data.results);
        setSubscribers(res.data.results);
      })
      .catch((error) => console.log(error));
  }, [load]);

  const changeHandler = (e) => {
    setSubscriber({
      ...subscriber,
      [e.target.name]: e.target.value,
    });
  };

  const editSubscriber = (e, id) => {
    axios
      .get("http://localhost:8000/api/Subscribers/" + id)
      .then((res) => {
        setSubscriber(res.data.results);
      })
      .catch((error) => console.log(error));
    handleShow();
  };

  const updateSubscriber = () => {
    axios.put('http://localhost:8000/api/Subscribers/' + subscriber._id, subscriber)
    .then(res => {
        console.log(res.data.results)
    setSubscriber({
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber:"",
        subject: "",
        message: ""
    });
    handleClose();
    window.location.reload();
  })
  .catch((error) => console.log(error));
  }
  const deleteSubscriber = (id) => {
      console.log(id)
    axios.delete("http://localhost:8000/api/Subscribers/" + id)
    .then(res => {
        console.log(res.data.message)
        load === 1 ? setLoad(0) : setLoad(1);
    })
    .catch((error) => console.log(error));
}
  

  return (
    <div>
      <h1>Admin Page</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.map((s, i) => (
            <tr key="i">
              <td>{i}</td>
              <td>{s.firstName}</td>
              <td>{s.lastName}</td>
              <td>{s.emailAddress}</td>
              <td>{s?.phoneNumber}</td>
              <td>{s?.subject}</td>
              <td>{s?.message}</td>
              <td>
                <GrDocumentUpdate
                  className="adminIcon"
                  onClick={(e) => {
                    editSubscriber(e, s._id);
                  }}
                />
              </td>
              <td>
                <MdDeleteForever
                  className="adminIcon"
                  onClick={() => {
                    deleteSubscriber(s._id);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleShow}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>
              Edit {subscriber.firstName} {subscriber.lastName}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={updateSubscriber}>
              <Form.Group>
                <Form.Control
                  name="emailAddress"
                  className="modalInput"
                  id="emailAddress"
                  type="text"
                  placeholder={subscriber.emailAddress}
                  onChange={changeHandler}
                  value={subscriber.emailAddress}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  name="firstName"
                  className="modalInput"
                  id="firstName"
                  type="text"
                  placeholder={subscriber.firstName}
                  onChange={changeHandler}
                  value={subscriber.firstName}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  name="lastName"
                  className="modalInput"
                  id="lastName"
                  type="text"
                  placeholder={subscriber.lastName}
                  onChange={changeHandler}
                  value={subscriber.lastName}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  name="phoneNumber"
                  className="modalInput"
                  id="number"
                  type="text"
                  placeholder={subscriber.phoneNumber}
                  onChange={changeHandler}
                  value={subscriber.phoneNumber}
                />
              </Form.Group>
              <Button variant="primary" type="submit">Save Changes</Button>
            </Form>{" "}
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </div>
  );
};

export default Admin;
