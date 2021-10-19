import React from "react"
import partner1 from "../../../public/images/logo-1.png"
import partner2 from "../../../public/images/logo-2.png"
import partner3 from "../../../public/images/logo-3.png"
import partner4 from "../../../public/images/logo-4.png"
import partner5 from "../../../public/images/logo-5.png"

export default function Partners(){
    return(
        <section className="partners">
            <h2>our partners</h2>
            <article className="partner-logos">
                <img src={partner1} alt="parner logo" />
                <img src={partner2} alt="parner logo" />
                <img src={partner3} alt="parner logo" />
                <img src={partner4} alt="parner logo" />
                <img src={partner5} alt="parner logo" />
            </article>
        </section>
    )
}