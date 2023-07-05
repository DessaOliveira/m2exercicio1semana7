import React, { useState } from "react";

const Header = () => {
    const [user, setUser] = useState('')

    const handleClick = () => {
        const inputName = prompt('Digite seu nome')
        if (inputName) {
            setUser(inputName)
        }
    }

    return (
        <>
        <h1 onClick={handleClick}>Olá, {user || "Visitante"}</h1>
        </>


    );
};
export default Header;