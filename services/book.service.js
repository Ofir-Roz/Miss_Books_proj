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
        if (filterBy.minPrice) {
            books = books.filter(book => book.listPrice.amount >= filterBy.minPrice)
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

function getDefaultFilter() {
    return { title: '', minPrice: '' }
}

function _createBooks() {
    const ctgs = ['Love', 'Fiction', 'Poetry', 'Computers', 'Religion']
    const books = []
    var imgNumber
    for (let i = 0; i < 20; i++) {
        imgNumber = i + 1
        const book = {
            id: utilService.makeId(),
            title: utilService.makeLorem(2),
            subtitle: utilService.makeLorem(4),
            authors: [
                utilService.makeLorem(1)
            ],
            publishedDate: utilService.getRandomIntInclusive(1950, 2024),
            description: utilService.makeLorem(150),
            pageCount: utilService.getRandomIntInclusive(20, 600),
            categories: [ctgs[utilService.getRandomIntInclusive(0, ctgs.length - 1)]],
            imgNum: imgNumber,
            thumbnail: `http://coding-academy.org/books-photos/${imgNumber}.jpg`,
            language: "en",
            listPrice: {
                amount: utilService.getRandomIntInclusive(80, 500),
                currencyCode: "EUR",
                isOnSale: Math.random() > 0.7
            }
        }
        books.push(book)
    }
    utilService.saveToStorage(BOOK_KEY, books)
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