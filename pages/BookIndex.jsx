import { bookService } from "../services/book.service.js"
import { BookFilter } from "../cmps/BookFilter.jsx"
import { BookList } from "../cmps/BookList.jsx"

const { useEffect, useState } = React

export function BookIndex() {
    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy)
            .then(setBooks)
            .catch(err => {
                console.log("Problem getting books:", err)
            })
    }

    function onSetFilter(filterBy) {
        setFilterBy(prevFilter => ({
            ...prevFilter, ...filterBy
        }))
    }

    if (!books) return <div>Loading...</div>
    return (
        <section className="book-index">
            <BookFilter defaultFilter={filterBy} onSetFilter={onSetFilter} />

            <BookList books={books} />
        </section>
    )
}