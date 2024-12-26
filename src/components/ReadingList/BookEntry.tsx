import { useState } from "react"
import { FaStar } from "react-icons/fa"
import "./BookEntry.css"

export type BookEntryProps = {
    previewImage: string,
    title: string,
    author: string,
    rating: number,
    review: string
}

function BookEntry({previewImage, title, author, rating, review} : BookEntryProps) {
    return (
        <div className="book-entry">
            <img src={previewImage} alt={`${title} Cover by ${author}`}/>
            <text>{title}</text>
            <text>{author}</text>
            <text>{rating} {<FaStar/>}</text>
            <textarea value={review}/>
        </div>
    )
}

export default BookEntry