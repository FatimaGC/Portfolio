import React from "react"; 
import './styles.css';

function Avatar({src, variant="PRIMARY", firstName, lastName}){
    const username = `${firstName || " "} ${lastName || " "}`.trim(); 
    const getInitials = (firstName, lastName) => {
        const firstInitial = firstName?.slice?.(0,1);
        const lastInitial = lastName?.slice?.(0,1);

        if (firstInitial && lastInitial) {
            return `${firstInitial}${$lastInitial}`
        }
    return null;
    }
    const initials = getInitials(firstName, lastName);
    const shouldShowImage = Boolean(src || (!src && !username));
    return (
        <figure>
            {
                
            }
        </figure>
    )
}

export default Avatar;