import React from "react";
import SmallFooter from "../components/Footer/SmallFooter";
import ContactHeader from "../components/ContactHeader/ContactHeader";
import ContactBody from "../components/ContactBody/ContactBody";
import Navbar from "../components/Navbar/Navbar";

function contact() {
  return (
    <div>
    <Navbar />
    <ContactHeader />
    <ContactBody />
    <br></br>
    <SmallFooter />
    </div>
  );
}

export default contact;