import React from "react"
import Head from "./components/Head"
import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"

export default function Content() {
    return (
        <div className="main">
            <Head />
            <AboutMe />
            <Footer />
        </div>
    )
}