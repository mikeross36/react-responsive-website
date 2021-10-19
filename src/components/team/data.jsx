import React from "react"
import nextId from "react-id-generator"
import {FaTwitter, FaFacebook, FaInstagram,FaLinkedin} from "react-icons/fa"
import neo from "../../../public/images/neo.jpg"
import trinity from "../../../public/images/trinity.jpg"
import morpheus from "../../../public/images/morpheus.jpg"
import smith from "../../../public/images/smith.jpg"
import oracle from "../../../public/images/oracle.jpg"

export const teamMembers = [
    {
        id: nextId(),
        image: neo,
        name: "john doe",
        title: "front-end-developer",
        socialIcons: [
            {id: nextId(), url:"https://twitter.com/login?lang=en", icon:<FaTwitter/>},
            {id: nextId(), url:"https://www.facebook.com/", icon:<FaFacebook/>},
            {id: nextId(), url:"https://www.instagram.com/accounts/login/",icon:<FaInstagram/>},
            {id: nextId(), url:"https://rs.linkedin.com/",icon:<FaLinkedin/>}
        ]
    },
    {
        id: nextId(),
        image: trinity,
        name: "jane doe",
        title: "front-end-developer",
        socialIcons: [
            {id: nextId(), url:"https://twitter.com/login?lang=en", icon:<FaTwitter/>},
            {id: nextId(), url:"https://www.facebook.com/", icon:<FaFacebook/>},
            {id: nextId(), url:"https://www.instagram.com/accounts/login/",icon:<FaInstagram/>},
            {id: nextId(), url:"https://rs.linkedin.com/",icon:<FaLinkedin/>}
        ]
    },
    {
        id: nextId(),
        image: morpheus,
        name: "john doe",
        title: "front-end-developer",
        socialIcons: [
            {id: nextId(), url:"https://twitter.com/login?lang=en", icon:<FaTwitter/>},
            {id: nextId(), url:"https://www.facebook.com/", icon:<FaFacebook/>},
            {id: nextId(), url:"https://www.instagram.com/accounts/login/",icon:<FaInstagram/>},
            {id: nextId(), url:"https://rs.linkedin.com/",icon:<FaLinkedin/>}
        ]
    },
    {
        id: nextId(),
        image: smith,
        name: "john doe",
        title: "front-end-developer",
        socialIcons: [
            {id: nextId(), url:"https://twitter.com/login?lang=en", icon:<FaTwitter/>},
            {id: nextId(), url:"https://www.facebook.com/", icon:<FaFacebook/>},
            {id: nextId(), url:"https://www.instagram.com/accounts/login/",icon:<FaInstagram/>},
            {id: nextId(), url:"https://rs.linkedin.com/",icon:<FaLinkedin/>}
        ]
    },
    {
        id: nextId(),
        image: oracle,
        name: "jane doe",
        title: "front-end-developer",
        socialIcons: [
            {id: nextId(), url:"https://twitter.com/login?lang=en", icon:<FaTwitter/>},
            {id: nextId(), url:"https://www.facebook.com/", icon:<FaFacebook/>},
            {id: nextId(), url:"https://www.instagram.com/accounts/login/",icon:<FaInstagram/>},
            {id: nextId(), url:"https://rs.linkedin.com/",icon:<FaLinkedin/>}
        ]
    },
]