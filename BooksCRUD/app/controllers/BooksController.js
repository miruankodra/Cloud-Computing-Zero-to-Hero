///////////////////////////////////////////////////////////////////
//---------------------Routing File-----------------------------//
/////////////////////////////////////////////////////////////////

const booksService = require('../services/BooksService');


const storeBook = (bookRequest, res) => {
    booksService.createBook(bookRequest, (errors, results, fields) => {
        if (errors) {
            res.status(500).json(errors);
        } else {

            res.status(200).json(results);
        }
    });
}

const getAllBooks = (res) => {
    booksService.getBooks((errors, results, fields) => {
        if (errors) {
            res.status(500).json(errors);
        } else {

            res.status(200).json(results);
        }
    });
}

const getBookById = (bookId, res) => {
    booksService.getBookById(bookId, (errors, results, fields) => {
        if (errors) {
            res.status(500).json(errors);
        } else {

            res.status(200).json(results);
        }
    })
}

const updateBook = (bookId, bookRequest, res) => {
    booksService.updateBook(bookId, bookRequest, (errors, results, fields) => {
        if (errors) {
            res.status(500).json(errors);
        } else {

            res.status(200).json(results);
        }
    });
}

const deleteBook = (bookId, res) => {
    booksService.deleteBook(bookId, (errors, results, fields) => {
        if (errors) {
            res.status(500).json(errors);
        } else {

            res.status(200).json(results);
        }
    })
}

module.exports = {
    storeBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
}