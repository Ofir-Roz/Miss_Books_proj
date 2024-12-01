import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'
_createBooks()

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    getDefaultFilter,
}

// For Debug (easy access from console):
window.bookService = bookService;

function query(filterBy = {}) {
    return storageService.query(BOOK_KEY).then((books) => {
        if (filterBy.title) {
            const regex = new RegExp(filterBy.title, 'i')
            books = books.filter(book => regex.test(book.title))
        }
        if (filterBy.listPrice) {
            books = books.filter(book => book.listPrice.amount <= filterBy.listPrice)
        }
        return books
    })
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
}

function remove(bookId) {
    return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}

function getEmptyBook(title = '', amount = 0, currencyCode = 'USD', isOnSale = false) {
    return {
        id: '',
        title,
        description: '',
        thumbnail: '',
        listPrice: { amount, currencyCode, isOnSale }
    }
}

function getDefaultFilter(filterBy = { title: '', listPrice: 0 }) {
    return { title: filterBy.title, listPrice: filterBy.listPrice }
}

function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = []
        const demoBooks = [
            {
                id: utilService.makeId(),
                title: "metus hendrerit",
                description: "placerat nisi sodales suscipit tellus",
                thumbnail: "http://coding-academy.org/books-photos/1.jpg",
                listPrice: { amount: 109, currencyCode: "EUR", isOnSale: false }
            },
            {
                id: utilService.makeId(),
                title: "audu",
                description: "lorem ipsum dolor sit amet",
                thumbnail: "http://coding-academy.org/books-photos/2.jpg",
                listPrice: { amount: 150, currencyCode: "USD", isOnSale: true }
            },
            {
                id: utilService.makeId(),
                title: "fiak",
                description: "morbi aliquet sapien et ligula",
                thumbnail: "http://coding-academy.org/books-photos/3.jpg",
                listPrice: { amount: 90, currencyCode: "USD", isOnSale: false }
            }
        ]
        books.push(...demoBooks)
        utilService.saveToStorage(BOOK_KEY, books)
    }
}

function _createBook(title, amount = 150, currencyCode = 'USD', isOnSale = false) {
    return {
        id: utilService.makeId(),
        title,
        description: utilService.getLorem(20),
        thumbnail: 'http://coding-academy.org/books-photos/default.jpg',
        listPrice: { amount, currencyCode, isOnSale }
    }
}