import React from "react";
import Nav from "../../Navigate/Nav";
import NameCard from "./NameCard";
import "./AboutMe.css";
import "../../styles.css";

function AboutMe() {
    return (
        <div className="page">
            <Nav />
            <div className="about-me-container">
                <NameCard
                    profilePic={`${process.env.PUBLIC_URL}/new pfp.jpg`}
                    name={"Alan Zhang"}
                    age={20}
                    major={"Computer Science"}
                />
                <div className="about-me-content">
                    <h1 className="about-me-heading">This is me</h1>
                    <p className="description">
                        I'm Alan Zhang, a passionate computer science student exploring the realms of full-stack development, iOS projects, and tangible impact through programming.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
