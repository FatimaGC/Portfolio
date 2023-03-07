import React from "react"; 
import './styles.css';

function Button({children="", onClick=() => undefined}) {
    return (
        <button className="button" onClick={() => onClick()}>{children}</button>
        
    )
}

export default Button