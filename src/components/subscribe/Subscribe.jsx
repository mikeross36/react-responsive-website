import React from "react"

export default function Subscribe(){
    return (
        <section className="subscribe">
            <div className="form-wrapper">
                <form action="#">
                    <h4>Let's keep in touch!</h4>
                    <input type="text" placeholder="name..."/>
                    <input type="email" placeholder="email..."/>
                    <p>we will not share your information</p>
                </form>
                <button type="submit" className="subscribe-btn">subscribe</button>
            </div>
        </section>
    )
}