import React from 'react';

function Button({ buttonName, classNameProp = '' }) {
  return (
    <button className={`btn header-link ${classNameProp}`}>{buttonName}</button>
  );
}

export default Button;
