import React from "react"

import { FaEnvelope, FaMapMarkerAlt, FaPhoneSquareAlt } from "react-icons/fa";

export default function Footer(){
    return (
        <footer className="footer" id="footer">
            <div className="footer-wrapper">
                <a href="none" className="footer-logo">
                    <h3>company logo here</h3>
                </a>
                <p>
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Non natus rem praesentium! 
                    Fuga facere totam debitis sed doloremque id 
                    voluptatibus.
                </p>
                <div className="footer-contact" id="footer-contact">
                    <a href="none" className="footer-phone">
                        <FaPhoneSquareAlt style={iconStyle}/>
                        +381 66 22 33 77
                    </a>
                    <a href="none" className="footer-email">
                        <FaEnvelope style={iconStyle}/>
                        someemail@email.com
                    </a>
                    <a href="none" className="footer-address">
                        <FaMapMarkerAlt style={iconStyle}/>
                        Some Address 125 Novi Sad
                    </a>
                </div>
                <div className="footer-links1">
                    <h4>what's new</h4>
                    <a href="/">events</a>
                    <a href="/">terms of use</a>
                    <a href="/">trademarks</a>
                    <a href="/">about our ads</a>
                </div>
                <div className="footer-links2">
                    <h4>usefull links</h4>
                    <a href="/">home</a>
                    <a href="#tabs">quotes</a>
                    <a href="#team">team</a>
                    <a href="#shop">shop</a>
                </div>
            </div>
            <div className="copyright">
                <p>&copy;Copyright 2020 DodaDesign All rights reserved</p>
            </div>
        </footer>
    )
}

const iconStyle = {
    paddingRight: "1rem",
    fontSize: "2rem"
}