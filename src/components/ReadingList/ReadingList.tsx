import Nav from "../../Navigate/Nav";
import BookEntry from "./BookEntry";
import { books } from "../../data/books";
import "../../styles.css";
import "./BookEntry.css";

function ReadingList() {
    return (
        <div className="page">
            <Nav />
            <div className="reading-list-container">
                {books.map((book, index) => (
                    <BookEntry
                        key={index}
                        previewImage={book.previewImage}
                        title={book.title}
                        genre={book.genre}
                        author={book.author}
                        rating={book.rating}
                        review={book.review}
                    />
                ))}
            </div>
        </div>
    );
}

export default ReadingList;
