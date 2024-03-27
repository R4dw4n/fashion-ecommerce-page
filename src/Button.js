import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline", "btn--login"];
const SIZES = ["btn--medium", "btn--large"];

function Button({ children, type, onClick, buttonStyle, buttonSize, goTo, customStyle }) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={goTo || '/'} className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize} ${customStyle}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;
