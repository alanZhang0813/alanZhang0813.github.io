import Nav from "../../Navigate/Nav";
import NameCard from "./NameCard";
import './AboutMe.css';
import "../../styles.css"

function AboutMe() {
    return(
        <div className={"page"}>
            <Nav/>
            <NameCard profilePic={`${process.env.PUBLIC_URL}/new pfp.jpg`} name={"Alan Zhang"} age={20} major={"Computer Science"}/>
            <div className={"d-flex"} style={{margin: "5px 5px"}}>
                <div className={"d-flex flex-row"}>
                    {/* <div className={"d-flex flex-column"}>
                        <img src={`${process.env.PUBLIC_URL}/new pfp.jpg`} width={329} height={366} alt={"profile"}/>
                    </div> */}
                    <div className={"d-flex flex-column"}>
                        <span style={{fontSize: "100px"}}>This is me</span>
                    </div>
                    
                    <p>Here's some stuff I do</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;