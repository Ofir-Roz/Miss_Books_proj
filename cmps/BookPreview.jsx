import { bookService } from "../services/book.service.js"

export function BookPreview({ book }) {
    
    const {isOnSale, getPriceInColor} = bookService
    const {title, authors, listPrice, thumbnail} = book
    return (
        <article className="book-preview">
            {(isOnSale(listPrice.isOnSale)) || <h1></h1>}
            <h2>{title}</h2>
            <h3>by {authors}</h3>
            <img src={thumbnail} alt="book-image" />
            <h2><strong style={getPriceInColor(listPrice.amount)}>{listPrice.amount} {listPrice.currencyCode}</strong></h2>
        </article>
    )

}