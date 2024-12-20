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
    const [active, setActive] = useState(true)

    const toggleActive = () => {
        setActive(!active)
    }

    return (
        <div className="name-card">
            <img src={profilePic} width={329} height={366} alt={"Profile"}/>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Major: {major}</p>

            <button onClick={toggleActive}>
                {active ? <FaMinus/> : <FaPlus/>}
            </button>
        </div>
    )
}
export default NameCard;