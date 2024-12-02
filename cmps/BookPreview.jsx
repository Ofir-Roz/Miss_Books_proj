import { utilService } from "../services/util.service.js"

export function BookPreview({ book }) {

    return (
        <article className="book-preview">
            <h2>Title: {book.title}</h2>
            <h2>Price: {book.listPrice.amount}</h2>
            <img src={`../assets/img/BooksImages/${utilService.getRandomIntInclusive(1, 20)}.jpg`} alt="book-image" />
        </article>
    )

}