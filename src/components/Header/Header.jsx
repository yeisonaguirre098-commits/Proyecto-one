import React from "react";
import Imagen from "../../logo.svg";

import './Header.css';

const Header = () => {
    
    return(
        <div className="header">
            <img src={Imagen} alt=""/>
            <h1>React</h1>
            <h2>La biblioteca para interfaces de usuarios web y nativas</h2>
        </div>
    )
}

export default Header