import { useState } from "react";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import "./BookEntry.css";

export type BookEntryProps = {
    previewImage: string;
    title: string;
    author: string;
    rating: number;
    review: string;
};

const BookEntry = ({
    previewImage,
    title,
    author,
    rating,
    review,
}: BookEntryProps) => {
    const [active, setActive] = useState(false);

    const toggleActive = () => {
        setActive(!active);
    };

    return (
        <div className="book-card">
            <div className="book-header" onClick={toggleActive}>
                <h2>{title}</h2>
                <button>{active ? <FaMinus /> : <FaPlus />}</button>
            </div>

            {active && (
                <div className={`book-body ${active ? "active" : ""}`}>
                    <img
                        src={previewImage}
                        alt={`${title} Cover by ${author}`}
                    />
                    <p>Author: {author}</p>
                    <p className="rating">
                        Rating: {rating} <FaStar />
                    </p>
                    <textarea
                        value={review}
                        readOnly
                        className="review-box"
                    ></textarea>
                </div>
            )}
        </div>
    );
};

export default BookEntry;
