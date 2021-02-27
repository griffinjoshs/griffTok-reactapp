import React from 'react'
import './styles/LinkPage.css'
import { Container, Col, Row } from "react-bootstrap";
import profilePic from '../images/profilePic.jpeg'
import { SiTiktok, SiInstagram, SiYoutube, SiTwitch } from "react-icons/si";
import { FaPodcast, FaBell } from "react-icons/fa"
import { GoMail } from 'react-icons/go'

const linkBoxes = [
    {
        id: 0,
        icon: <SiYoutube />,
        text: 'Youtube',
        link: ''
    },
    {
        id: 1,
        icon: <SiInstagram className='link-Icon'/>,
        text: 'Instagram',
        link: ''
    },
    {
        id: 2,
        icon: <SiTiktok className='link-Icon'/>,
        text: 'TikTok',
        link: ''
    },
    {
        id: 3,
        icon: <SiTwitch className='link-Icon'/>,
        text: 'Twitch',
        link: ''
    },
    {
        id: 3,
        icon: <FaPodcast className='link-Icon'/>,
        text: 'Podcast',
        link: ''
    }
]


const LinkPage = () => {
    return (
        <>
         <Container>
         <br></br>
         <br></br>
            <Row className='profile-row'>
                <img src={profilePic} alt={profilePic} width='200' height='200' id='profile-pic'></img>
            </Row>
            <br></br>
            <Row>
            <h1 id='name'>Griffin Joshs</h1>
            <br></br>
            <h5 id='bio'>Thanks For Your Support! Hit the Bell to Subscribe for FREE!!</h5>
            <div className='top-icons'>
                <br></br>
            <h3 id='top-icon'><GoMail/></h3>
            <h3 id='top-icon'><FaBell/></h3>
            </div>
            <br></br>
            </Row>            
        </Container>
        <br></br>
        <Container className='linkbox-con'>
            {linkBoxes.map((box, i) => (
                    <div className='infoBox' key={box.id}>
                    <br></br>
                    <Row className='info-Row'>
                    <Col xs={4}>
                    <h3 className='link-Icon'>{box.icon}</h3>
                    </Col>
                    <Col xs={8}>
                    <h4 className='link-title'>
                    {box.text}
                    </h4>
                    </Col>
                    </Row>
                    </div>
                ))}
        </Container>
        <p className='link-footer'>Powered By Griffins Web Services</p>
        <br></br>
        </>
    )
}

export default LinkPage
