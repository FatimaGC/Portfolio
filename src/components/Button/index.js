import React from "react"; 
import './styles.css';

function Button({children="", onClick=() => undefined, href=undefined, colorScheme="PRIMARY"}){

    return href ? (   
            <a className={`button button--color-scheme--${colorScheme} link`} onClick={() => onClick()} href={href}>{children}</a>
        ) : (
            <button className={`button button--color-scheme--${colorScheme} link`} onClick={() => onClick() }>{children}</button>
        )
}

export default Button