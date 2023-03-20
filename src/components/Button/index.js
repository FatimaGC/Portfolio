import React from "react"; 
import './styles.css';

function Button({children="", onClick=() => undefined, href=undefined}) {

    return href ? (   
            <a className="button link" onClick={() => onClick()} href={href}>{children}</a>
        ) : (
            <button className="button" onClick={() => onClick()}>{children}</button>
        )
}

export default Button