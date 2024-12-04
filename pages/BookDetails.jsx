import { bookService } from "../services/book.service.js"
import { utilService } from "../services/util.service.js"


const { useEffect, useState } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

export function BookDetails(){
    const [book, setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadBook()
    }, [params.bookId])

    function loadBook(){
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

    if (!book) return <div>Details Loading...</div>
    return (
        <section className="book-details">
            <h1>Book Title: {book.title}</h1>
            <h1>Price: {book.listPrice.amount}</h1>
            <p>{book.description}</p>
            <img src={`../assets/img/BooksImages/${book.imgNum}.jpg`} alt="book-image" />
            <button onClick={onBack}>Back</button>
        </section>
    )
}