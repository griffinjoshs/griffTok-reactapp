import React from "react";
import "./Button.css";

const STYLES = ['btn--primary', 'btn--outline', 'btn--test', 'btn--form'];

const SIZES = ['btn--medium', 'btn--large', 'btn--small', 'btn--wide', 'btn--sortawide'];


const Button = ({ children, type, onClick, action, buttonStyle, buttonSize }) => {

const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
  <div>
    <button className={`btn ${checkButtonSize} ${checkButtonStyle}`} onClick={onClick} type={type} action={action}> 
      {children}
    </button>
  </div>
  )};

export default Button;
