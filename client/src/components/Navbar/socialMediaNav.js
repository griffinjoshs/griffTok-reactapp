import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { SiTiktok, SiInstagram, SiYoutube } from "react-icons/si";
import "./styles/socialMediaNav.css";

export default function socialMediaNav() {
    return (
    <Nav className="icons">
        <Nav.Link href="https://www.tiktok.com/@griffinjoshs" className="navIcon"><SiTiktok size="1.4em" /><Navbar.Brand>
        </Navbar.Brand></Nav.Link>
        <Nav.Link href="https://www.instagram.com/griffinjoshs/" className="navIcon"><SiInstagram size="1.4em" /><Navbar.Brand>
        </Navbar.Brand></Nav.Link>
        <Nav.Link href="https://www.youtube.com/c/griffinjoshs" className="navIcon"><SiYoutube size="1.6em" /><Navbar.Brand>
        </Navbar.Brand></Nav.Link>
    </Nav> 
    )
}

