///////////////////////////////////////////////////////////////////
//---------------------Routing File-----------------------------//
/////////////////////////////////////////////////////////////////

const booksService = require('../services/BooksService');


const storeBook = (bookRequest, callback) => {
    booksService.createBook(bookRequest, callback);
}

const getAllBooks = (callback) => {
    booksService.getBooks(callback);
}

const getBookById = (bookId, callback) => {
    booksService.getBookById(bookId, callback)
}

const updateBook = (bookId, bookRequest, callback) => {
    booksService.updateBook(bookId, bookRequest, callback);
}

const deleteBook = (bookId, callback) => {
    booksService.deleteBook(bookId, callback)
}

module.exports = {
    storeBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
}