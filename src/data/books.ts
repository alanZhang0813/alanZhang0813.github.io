export interface BookEntry {
    previewImage: string,
    title: string,
    author: string,
    rating: number,
    review: string
}

export const books: BookEntry[] = [
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