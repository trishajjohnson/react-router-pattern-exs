import React from "react";
import { useParams, Link, useHistory } from "react-router-dom";

import "./Color.css";

const Color = () => {
    const { color } = useParams();
    const allColors = JSON.parse(localStorage.getItem("colors"));
    const hex = allColors[color];
    const history = useHistory();

    if(!hex) history.push("/colors"); 

    return (
        <div className="Color" style={{backgroundColor: hex}}>
            <h1 className="Color-heading" style={{color: hex}, {opacity: 0.3}}>{color}</h1>
            <p className="back-link"><Link className="link" to={"/colors"}>Go Back</Link></p>   
        </div>
    );
}

export default Color;