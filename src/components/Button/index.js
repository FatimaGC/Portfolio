import React from "react"; 
import "./styles.css";

function Button() {
    
    return (
        <button onClick={() => console.log('Clicked!')}>Click here!</button>
    )
}

export default Button