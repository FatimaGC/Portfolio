import React from "react"; 
import './styles.css';

function Avatar({src, variant="PRIMARY"}){
    return (
            <figure>  
                <img src={src} alt="A user's profile photo" className={`avatar--variant--${variant}`}/>
            </figure>
        )
}

export default Avatar;