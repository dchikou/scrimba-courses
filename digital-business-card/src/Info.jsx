import React from "react"
import Image from "./image.jpg"

export default function Info() {
    return (
        <header className="header-container">
            <img className="header-image" src={Image} />
            <h2 className="header-name">David Chikousky</h2>
            <p className="header-job">Frontend Developer</p>
            <a className="header-website" href="#">davidchik.website</a>
            <div className="link-container">
                <a className="contact-button-one" href="mailto:dchikou@gmail.com"><i className="fa-solid icon-link fa-envelope"></i> Email</a>
                <a className="contact-button-two" href="https://www.linkedin.com/in/dchikou"><i className="fa-brands icon-link fa-linkedin"></i> LinkedIn</a>
            </div>
        </header>
    )
}