import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/BottomSecImage.css";
import iPhoneImage from "../../images/phone_1_1.png";

function BottomSecImage() {
    return (
       <div>
            <br></br>
            <br></br>
           <img src={iPhoneImage} alt="iPhone" text-align="center" id="iPhone" />
       </div>
        
    )
}

export default BottomSecImage;