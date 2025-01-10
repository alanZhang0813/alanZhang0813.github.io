import Nav from "../../Navigate/Nav";
import "./MyGames.css"
import "../../styles.css"
import ChessBoardViewer from "./ChessBoardViewer";

function MyGames() {
    const pgn = `e4 c5 Nf3 d6 e5 Nc6 exd6 Qxd6 Nc3 Nf6`; // Example PGN string

    return (
        <div className={"page"}>
            <Nav/>
            <h1>An archive of my chess games!</h1>
            <h1 style={{color: "white"}}>Work in progress, but coming soon to a website near you!</h1>
            {/* <ChessBoardViewer pgn={pgn}/> */}
        </div>
    )
}

export default MyGames