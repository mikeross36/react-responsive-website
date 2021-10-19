import React from "react"
import { teamMembers } from "./data"

export default function Team(){
    return (
        <section className="team" id="team">
            <h2>our team</h2>
            <div className="team-story">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
				Tempora, quas pariatur recusandae assumenda quisquam dolorum 
				amet natus facilis explicabo. Voluptatem maiores voluptatum 
				necessitatibus, iure laboriosam a itaque voluptates ab, dignissimos 
				architecto omnis laudantium sequi alias explicabo recusandae ad 
				quidem soluta doloribus tenetur. Quibusdam deleniti praesentium, 
				soluta magnam.
                </p>
            </div>
            <div className="team-wrapper">
                {teamMembers.map(function(member){
                    const {id, image, name, title, socialIcons} = member;
                    return(
                        <article key={id} className="member">
                            <img src={image} alt={name} />
                            <div className="member-footer">
                                <h4>{name}</h4>
                                <h5>{title}</h5>
                                <div className="social-icons">
                                    {socialIcons.map(function(socIcon){
                                        const {id, url, icon} = socIcon;
                                        return(
                                            <a 
                                                key={id} 
                                                href={url}
                                                target="_blank"
                                                rel="noreferrer">
                                                {icon}
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}