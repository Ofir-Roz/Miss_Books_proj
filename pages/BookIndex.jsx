import { bookService } from "../services/book.service.js"
import { BookFilter } from "../cmps/BookFilter.jsx"
import { BookList } from "../cmps/BookList.jsx"

const { useEffect, useState } = React

export function BookIndex() {
    const [books, setBooks] = useState(null)

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        bookService.query()
            .then(setBooks)
            .catch(err => {
                console.log("Problem getting books:", err)
            })
    }


    if (!books) return <div>Loading...</div>
    return (
        <section className="book-index">
            <BookFilter />

            <BookList books={books} />
        </section>
    )
}