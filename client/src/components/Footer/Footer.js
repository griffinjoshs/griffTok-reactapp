import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/Footer.css";
import FooterIcons from "./FooterIcons";
import FooterForm from "./FooterForm";
// import eCommerceLink from '../Navbar'

function Footer() {
    return ( 
        <footer>
          <div className="container-fluid footer-top" id="fluid">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 segment-two" id="footerNavColumn">
                <h2 className="followHeader" id="Hfooter">Follow Me</h2>
                  <p id="footerP"><FooterIcons/></p>               
                      </div>
                <div className="col-lg-3 col-md-6 col-sm-12 segment-two" id="footerNavColumn">
                  <h2 id="Hfooter">Sponsors</h2>
                  <ul className="navbarFooter">
                    {/* ======= Navbar Links ======= */}
                    <li className="footerNavitem text-decoration-none">
                      <a href="https://www.mdacne.com/" className="nav-link footerNavLink">MD Acne</a>
                    </li>
                    <li className="footerNavitem text-decoration-none">
                      <a href="https://thecoldestwater.com/?ref=shop-griffinjoshs" className="nav-link footerNavLink">The Coldest Water</a>
                    </li>
                    <li className="footerNavitem text-decoration-none">
                      <a href="https://www.vanlinker.com/" className="nav-link footerNavLink">Vanlinker Sunglasses</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 segment-two" id="footerNavColumn">
                  <h2 id="Hfooter">Pages</h2>
                  <ul className="navbarFooter">
                    {/* ======= Navbar Links ======= */}
                    <li className="footerNavitem text-decoration-none">
                      <a href="/" className="nav-link footerNavLink">Home</a>
                    </li>
                    <li className="footerNavitem text-decoration-none">
                      <a href='https://griffinjoshs.bigcartel.com/' className="nav-link footerNavLink">Shop</a>
                    </li>
                    <li className="footerNavitem text-decoration-none">
                      <a href="/contact" className="nav-link footerNavLink">Contact</a>
                    </li>
                    <li className="footerNavitem text-decoration-none">
                      <a href="/about" className="nav-link footerNavLink">About Me</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 segment-two" id="footerNavColumn">
                  <h2 id="Hfooter">Subscribe</h2>
                  <p id="footerP">Become A Real One!</p>
                  <FooterForm/>
                  </div>
              </div>
            </div>
            <br></br> 
            <br></br>
          </div>
          <p className="footer-bottom-text">Built and Powered By Griffins Web Services 2020</p>
        </footer>
      );
    }
export default Footer;