import React from "react";

const Button = ({ name, styles, onClick }) => {
  return (
    <button className={`${styles} `} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
