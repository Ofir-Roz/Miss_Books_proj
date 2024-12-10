import { bookService } from "../services/book.service.js"

export function BookPreview({ book }) {

    const {title, listPrice, imgNum} = book
    return (
        <article className="book-preview">
            {bookService.isOnSale(listPrice.isOnSale)}
            <h2>Title: {title}</h2>
            <h2><strong style={bookService.getPriceInColor(listPrice.amount)}>{listPrice.amount} {listPrice.currencyCode}</strong></h2>
            <img src={`./assets/img/BooksImages/${imgNum}.jpg`} alt="book-image" />
        </article>
    )

}