import { useState } from "react"

export type BookEntryProps = {
    previewImage: string,
    title: string,
    author: string,
    rating: number,
    review: string
}

function BookEntry({previewImage, title, author, rating, review} : BookEntryProps) {

}

export default BookEntry