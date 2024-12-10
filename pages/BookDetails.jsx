import { bookService } from "../services/book.service.js"

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

    function getReadingDifficult(pageCount){
        if (pageCount>=500) return 'Serious Reading'
        else if (pageCount>=200) return 'Descent Reading'
        return 'Light Reading'
    }

    function getVintOrNewBudg(publishYear){
        const currentYear = new Date().getFullYear();
        if ((currentYear - publishYear) >= 10) return '- Vintage'
        if ((currentYear - publishYear) <= 1) return '- New'
    }

    function getPriceInColor(price){
        let style
        if (price > 150) style = {color: 'red'}
        if (price < 20) style = {color: 'green'}
        return style
    }
    
    function isOnSale(isOnSale){
        if (isOnSale)
            return <h1 style={{color: 'red'}}>On Sale!!</h1>
    }

    if (!book) return <div>Details Loading...</div>
    return (
        <section className="book-details">
            {isOnSale(book.listPrice.isOnSale)}
            <h1>{book.title}</h1>
            <h2>{book.subtitle}</h2>
            <h2>Author: {book.authors}</h2>
            <h2 style={getPriceInColor(book.listPrice.amount)}>Price: {book.listPrice.amount} €</h2>
            <h3>From: {book.publishedDate} {getVintOrNewBudg(book.publishedDate)}</h3>
            <h4>Categories: {book.categories}</h4>
            <h4><strong>{getReadingDifficult(book.pageCount)}</strong></h4>

            <p>{book.description}</p>
            <img src={`./assets/img/BooksImages/${book.imgNum}.jpg`} alt="book-image" />
            <button onClick={onBack}>Back</button>
        </section>
    )
}