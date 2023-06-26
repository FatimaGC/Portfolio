import React from "react"; 
import './styles.css';

function Avatar({src, variant="PRIMARY", firstName, lastName}){
    const username = `${firstName || " "} ${lastName || " "}`.trim(); 
    const shouldShowImage = Boolean(src || (!src && !username));
    return (
        <figure>
            {
                
            }
        </figure>
    )
}

export default Avatar;