import React from 'react';
import './Button.css';

function Button({ buttonName, classNameProp = '' }) {
  return (
    <button className={`btn header-link ${classNameProp}`}>{buttonName}</button>
  );
}

export default Button;
