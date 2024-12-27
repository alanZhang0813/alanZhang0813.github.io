import Nav from "../../Navigate/Nav";
import BookEntry from "./BookEntry";
import { books } from "../../data/books";

function ReadingList() {
    return (
        <div className={"page"}>
            <Nav />
            <h1>ReadingList</h1>

            {books.map((book) => {
                return <BookEntry {...book}/>
            })}
        </div>
    )
}
export default ReadingList;