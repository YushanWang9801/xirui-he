import React from 'react';
import "./Footer.css";
import "./Mobile-Footer.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, 
        faMedium, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer (){
    return (
        <div className="Footer">
            <div className="touch-section">
                <h3>Get in touch</h3>
                <div className="touch-content">
                    <span><h4>I'm located at: </h4><h4 className="span-gray"> &emsp; Vancouver, BC</h4></span>
                    <span><h4>Email: </h4><h4 className="span-gray"> &emsp; xrh324@126.com</h4></span>
                </div>
            </div>
            <div className="icon-section">
                <ul>
                <li><a href="#"><FontAwesomeIcon className="faicon" icon={faFacebook} /></a></li>
                <li><a href="#"><FontAwesomeIcon className="faicon" icon={faLinkedin} /></a></li>
                <li><a href="https://medium.com/@wang33he77"><FontAwesomeIcon className="faicon" icon={faMedium} /></a></li>
                <li><a href="#"><FontAwesomeIcon className="faicon" icon={faInstagram} /></a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;