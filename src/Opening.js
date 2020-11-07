import React from "react";
import Contact from "./Contact";
import { Code } from "react-feather";

export default function Opening() {
    return (
        <section className="opening-section">
            <Code className="code" />
            <div className="title-container">
                <h1>Anna Roshchina</h1>
                <h2>full-stack web developer</h2>
            </div>
            <div className="about-container">
                <h2>About me</h2>
                <p className="about-text">
                    I am a full-stack web developer based in Berlin. I came into
                    coding from a rich and diverse academic and teaching
                    background. Constant learning and challenging my mind define
                    my professional life as well as my personality. That is why
                    I decided to become a web developer and work in a dynamic
                    environment which encourages a life-time learning.
                    <br /> <br /> My tech skill set includes but is not limited
                    to: JavaScript, Node.js, Express, PostgreSQL, React, Redux,
                    Socket.io, Vue.js, Handlebars, HTML/CSS.
                </p>
                <Contact />
            </div>
        </section>
    );
}