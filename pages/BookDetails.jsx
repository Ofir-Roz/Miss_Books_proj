import { bookService } from "../services/book.service.js"
import { LongTxt } from "../cmps/LongTxt.jsx"

const { useEffect, useState } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

export function BookDetails() {
    const [book, setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadBook()
    }, [params.bookId])

    function loadBook() {
        bookService.get(params.bookId)
            .then(setBook)
            .catch(err => {
                console.log("Problem getting books:", err)
            })
    }

    function onBack() {
        navigate('/book')
        // navigate(-1)
    }

    function getReadingDifficult(pageCount) {
        if (pageCount >= 500) return 'Serious Reading'
        else if (pageCount >= 200) return 'Descent Reading'
        return 'Light Reading'
    }

    function getVintOrNewBudg(publishYear) {
        const currentYear = new Date().getFullYear();
        if ((currentYear - publishYear) >= 10) return '- Vintage'
        if ((currentYear - publishYear) <= 1) return '- New'
    }


    const { isOnSale, getPriceInColor } = bookService

    if (!book) return <div>Details Loading...</div>
    const {
        title,
        subtitle,
        authors,
        publishedDate,
        categories,
        pageCount,
        description,
        listPrice,
        imgNum } = book
    return (
        <section className="book-details">
            {isOnSale(listPrice.isOnSale)}
            <img src={`./assets/img/BooksImages/${imgNum}.jpg`} alt="book-image" />
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <h2>Author: {authors}</h2>
            <h2>Price: <strong style={getPriceInColor(listPrice.amount)}>{listPrice.amount} {listPrice.currencyCode}</strong></h2>
            <h3>From: {publishedDate} {getVintOrNewBudg(publishedDate)}</h3>
            <h4>Categories: {categories}</h4>
            <h4><strong>{getReadingDifficult(pageCount)}</strong></h4>
            <LongTxt txt={description} />
            <button onClick={onBack}>Back</button>
        </section>
    )
}