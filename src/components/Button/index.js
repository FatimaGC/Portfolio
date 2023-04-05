import React from "react"; 
import './styles.css';

function Button({children="", onClick=() => undefined, href=undefined, colorScheme="PRIMARY", isDisabled="false"}){

    return href ? (   
            <a className={`button button--color-scheme--${colorScheme} link`} disabled={isDisabled} onClick={() => onClick()} href={href}>{children}</a>
        ) : (
            <button className={`button button--color-scheme--${colorScheme} link`} disabled={isDisabled}  onClick={() => onClick() }>{children}</button>
        )
}

export default Button