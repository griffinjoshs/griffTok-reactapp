import React, {useState, useEffect} from 'react'
import './styles/Footer.css'
import { Modal, Form } from 'react-bootstrap'
import Button from '../Button/Button'
import axios from 'axios'


const FooterForm = () => {
    const [show, setShow] = useState(false);
    const [load, setLoad] = useState(1)
  const [data, setData] = useState({
    emailAddress: '',
      firstName: '',
      lastName: '',
      phone: ''
  });

  useEffect(() => {
    console.log("reloaded page...")
  }, [load])

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
        load === 1 ? setLoad(0): setLoad(1)
        handleClose()
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
};
    return (
        <div>
           <div className="btnContainer"> 
                      <div className='form-container'>
                      <div id="subForm">
                        <div id="input-container">
                          <input type="text" className="sub-form-text" name="emailAddress" id="subInput" placeholder="E-mail" onChange={changeHandler} value={data.emailAddress}/>
                          <button id="submitSub" onClick={handleShow}>Subscribe</button>
                        </div>    
                      </div>
                  </div>
                  </div>
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
                  </div>
                  )
}

export default FooterForm
