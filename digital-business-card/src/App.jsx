import React from "react"
import Interests from "./Interests"
import Footer from "./Footer"
import Info from "./Info"
import About from "./About"
import "./App.css"

export default function App() {
    return (
        <div className="business-card">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}