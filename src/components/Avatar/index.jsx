import React from "react"; 
import './styles.css';

function Avatar({src}){
    return (
            <figure>  
                <img src={src} />
            </figure>
        )
}

export default Avatar;