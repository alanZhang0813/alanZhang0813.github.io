import {HashRouter} from "react-router-dom";
import {Navigate, Route, Routes} from "react-router";
import AboutMe from "./components/AboutMe/AboutMe";
import HomePage from "./components/HomePage/HomePage";
import Portfolio from "./components/Portfolio/Portfolio";
import ReadingList from "./components/ReadingList/ReadingList";
import ChallengeMe from "./components/ChallengeMe/ChallengeMe";
import MyGames from "./components/My Games/MyGames";

function App() {
    return(
        <HashRouter>
            <div>
                <Routes>
                    <Route path={"/"} element={<Navigate to="/HomePage"/>}/>
                    <Route path={"/HomePage"} element={<HomePage/>}/>
                    <Route path={"/AboutMe"} element={<AboutMe/>}/>
                    <Route path={"/Portfolio"} element={<Portfolio/>}/>
                    <Route path={"/ReadingList"} element={<ReadingList/>}/>
                    <Route path={"/ChallengeMe"} element={<ChallengeMe/>}/>
                    <Route path={"/MyGames"} element={<MyGames/>}/>
                </Routes>
            </div>
        </HashRouter>
    );
}
export default App;