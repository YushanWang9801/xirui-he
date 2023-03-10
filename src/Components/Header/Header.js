import React from 'react';
import "./Header.css";

const Header = ({switchTheme, theme}) => {
    return (
        <div className ="Header">
            <input id="nav-toggle" type="checkbox" /> 
            <div className="container">
                <div className="logo">
                    <a href="/"><h1>XIRUI HE</h1></a>   
                </div>
                <nav className="navbar">
                    <a href="/#/design">Design</a>
                    <a href="/#/playground">Playground</a>
                    <a href="/#/connect">connect</a>
                </nav>
                <label htmlFor="nav-toggle" className="menuBar">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                </label>
            </div>
        </div>
    );
}

export default Header;