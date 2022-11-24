import React from "react"

export default function () {
    return (
        <header className="header">
            <img src="../images/hero-image.jpg" />
            <div className="details">
                <h2 className="details-name">Deneb Adrian Canton</h2>
                <h3 className="details-title">Frontend Developer</h3>
                <h4 className="details-portfolio"><a href="https://adriandneb.github.io/my-portfolio/" target="_blank">My Portfolio</a></h4>
                <a href="mailto:deneb.a.c.canton@gmail.com"><button className="btn-email"><img src="../images/email-icon.png" />Email</button></a>
            </div>
        </header>
    )
}