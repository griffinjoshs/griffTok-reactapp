import React, {useState} from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "./styles/Navbar.css";
import logo from '../../images/griffinjoshs-belinSans.png';
import SocialMediaNav from "./socialMediaNav";

function NavBar() {
  // links
  const eCommerceLink = 'https://griffinjoshs.bigcartel.com/'

  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 30){
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <nav className={navbar ? 'Navbar active fixed-top' : 'Navbar fixed-top'}>
      <Navbar collapseOnSelect expand="lg" fixed bg="" variant="dark">
        {/* <Navbar.Brand href="#homeIMG"></Navbar.Brand> */}
        <Navbar.Brand href="/">
          <img src={logo} id="logo" alt="Logo" width="200" height="45"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="navbarLink headerNavLink" href="/">Home</Nav.Link>
            <Nav.Link className="navbarLink headerNavLink" href={eCommerceLink}>Shop</Nav.Link>
            <Nav.Link className="navbarLink headerNavLink" href="/contact">Contact</Nav.Link>
            <NavDropdown title="About Me" className="navbarLink" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/about">About Me</NavDropdown.Item>
              <NavDropdown.Item href="https://griffinjoshs.bigcartel.com/">Shop</NavDropdown.Item>
              <NavDropdown.Item href="https://quiktok.io/influencer.php?influencer=942612495955">TikTok Promos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/about">About Me</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <SocialMediaNav />

        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}

export default NavBar;
