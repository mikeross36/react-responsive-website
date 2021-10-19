import React from "react"
import MainBtn from "../mainbtn/MainBtn"

export default function Banner(){
    return (
        <section className="banner">
            <div className="banner-wrapper">
                <div className="banner-text">
                    <h1>
                        It's a simple and <br/>responsive website
                    </h1>
                    <p>
                        A responsive website is one that has been designed to respond or
                        adapt, based on the technology and type of computing device used
                        by the visitor to display the site.
                    </p>
                    <a href="https://bit.ly/3mnIG6L"
                        target="_blank"
                        rel="noreferrer">
                        <MainBtn />
                    </a>
                </div>
                <div className="banner-image"></div>
            </div>
        </section>
    )
}