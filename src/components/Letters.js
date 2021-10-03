/*
    A component for wrapping every letter in a row
*/

import React from "react";
import "../css/Letters.css";

const Letters = ({children}) => {
  
    return (
    <div className="Letters">{children}</div>
    )
}


export default Letters;
