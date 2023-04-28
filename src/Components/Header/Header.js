import React from 'react';
import "./Header.css";
import {useRef} from 'react';

const Header = ({switchTheme, theme}) => {
    const navRef = useRef();
    // const [isOpen, setIsOpen] = useState(false);

    const showNavbar = () => {
        navRef.current.classList.toggle(
			"responsive_nav"
		);
    }

    return (
        <div className ="Header">
            <input id="nav-toggle" type="checkbox" /> 
            <div className="container">
                <div className="logo">
                    <a href="/"><h1>XIRUI HE</h1></a>   
                </div>
                <nav className="navbar" ref={navRef}>
                    <a href="/#/project" 
                    onClick={() => {showNavbar();}}>
                        Design</a>
                    <a href="/#/playground" 
                    onClick={() => {showNavbar(); }}>
                        Playground</a>
                    <a href="/#/connect" 
                    onClick={() => {showNavbar();}}>
                        Connect</a>
                </nav>
                <label htmlFor="nav-toggle" className="menuBar" 
                    onClick={() => {showNavbar(); }}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                </label>
            </div>
        </div>
    );
}

export default Header;