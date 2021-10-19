import React from "react"
import {links} from "./data"
import { HashLink } from "react-router-hash-link";

export default function Header({showMobMenu, toggleMobMenu, closeMobMenu}){
    return (
        <section className="header" id="header">
            <nav>
                <h4 className="header-logo">company<br/>logo</h4>
                <div className="menu-btn"
                    onClick={toggleMobMenu}>
                    <span className={`burger ${showMobMenu && "open"}`}></span>
                    <span className={`burger ${showMobMenu && "open"}`}></span>
                    <span className={`burger ${showMobMenu && "open"}`}></span>
                </div>
                {/*  */}
                <menu className="desktop-links">
                    {links.map(function(link){
                        const {id, url, text} = link;
                        return (
                            <li 
                                key={id} 
                                className="desk-link-item">
                                    <HashLink
                                    smooth to={url}>
                                        {text}
                                    </HashLink>
                            </li>
                        )
                    })}
                </menu>
            </nav>
            {/*  */}
            <menu className={`mobile-links ${showMobMenu ? "fade-in":"fade-out"}`}>
                {links.map(function(link){
                    const {id, url, text} = link;
                    return (
                        <li 
                            key={id} 
                            className="mob-link-item">
                                <HashLink
                                    smooth to={url}
                                    onClick={closeMobMenu}>
                                    {text}
                                </HashLink>
                            </li>
                    )
                })}
            </menu>
        </section>
    )
}