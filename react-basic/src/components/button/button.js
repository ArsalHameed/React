// Button.js
import React from 'react';
import './button.css';

const Button = ({ name, className }) => {
  return (
    <div>
      <a href="#">
        <button className={className}>{name}</button>
      </a>
    </div>
  );
};

export default Button;
