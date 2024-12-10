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
    isOnSale,
    getPriceInColor
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
    const books = JSON.parse(localStorage.getItem(BOOK_KEY)) || []
    console.log(books)
    if (books.length) return

    const ctgs = ['Love', 'Fiction', 'Poetry', 'Computers', 'Religion']
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
            publishedDate: utilService.getRandomIntInclusive(1960, 2024),
            description: utilService.makeLorem(150),
            pageCount: utilService.getRandomIntInclusive(20, 600),
            categories: [ctgs[utilService.getRandomIntInclusive(0, ctgs.length - 1)]],
            imgNum: imgNumber,
            thumbnail: `http://coding-academy.org/books-photos/${imgNumber}.jpg`,
            language: "en",
            listPrice: {
                amount: utilService.getRandomIntInclusive(1, 300),
                currencyCode: "€",
                isOnSale: Math.random() > 0.7
            }
        }
        books.push(book)
    }
    utilService.saveToStorage(BOOK_KEY, books)
}

function isOnSale(isOnSale){
    if (isOnSale)
        return <h1 style={{color: 'red'}}>On Sale!!</h1>
}

function getPriceInColor(price){
    let style
    if (price > 150) style = {color: 'red'}
    if (price < 20) style = {color: 'green'}
    return style
}
