import Nav from "../../Navigate/Nav";
import BookEntry from "./BookEntry";
import { BookEntryProps } from "./BookEntry";

function ReadingList() {
    const books: BookEntryProps[] = [
        {
            previewImage: "three-body-problem image",
            title: "The Three Body Problem",
            author: "Liu Cixin",
            rating: 5.0,
            review: "Book 1 of the greatest sci-fi trilogy of all time, my highly unbiased opinion",
        },
        {
            previewImage: "dark-forest image",
            title: "The Dark Forest",
            author: "Liu Cixin",
            rating: 5.0,
            review: "Book 2 of the greatest sci-fi trilogy of all time, my highly unbiased opinion",
        },
        {
            previewImage: "death's end image",
            title: "Death's End",
            author: "Liu Cixin",
            rating: 5.0,
            review: "Book 3 of the greatest sci-fi trilogy of all time, my highly unbiased opinion",
        },
    ];

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