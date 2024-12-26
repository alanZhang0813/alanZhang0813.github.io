import React, { useState } from "react";
import "./AboutMe.css"
import { FaPlus, FaMinus } from "react-icons/fa";

type NameCardProps = {
    profilePic: string;
    name: string;
    age: number;
    major: string;
  };

function NameCard({ profilePic, name, age, major }: NameCardProps) {
    const [active, setActive] = useState(false)

    const toggleActive = () => {
        setActive(!active)
    }

    return (
        <div className="name-card">
            {!active && (
                <div className="card-preview">
                    <p>My Card</p>
                </div>
            )}
            
            {active && (
                <div className="card-details">
                    <img src={profilePic} alt={"Profile"}/>
                    <p>Name: {name}</p>
                    <p>Age: {age}</p>
                    <p>Major: {major}</p>
                </div>
            )}
            <button className="toggle-button" onClick={toggleActive}>
                {active ? <FaMinus/> : <FaPlus/>}
            </button>
        </div>
    )
}
export default NameCard;