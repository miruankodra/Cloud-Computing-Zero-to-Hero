///////////////////////////////////////////////////////////////////
//---------------------Routing File-----------------------------//
/////////////////////////////////////////////////////////////////

const BookRequest = require('../app/interceptors/BooksInterceptor')
const bookController = require('../app/controllers/BooksController');
const env = require('../environments/environment')

const booksRoutes = (app) => {
    app.get('/', (req, res) => {
        res.status(200).json(env.mapOfCalls);
    })


    app.post('/books', BookRequest, (req, res) => {
        bookController.storeBook(req.body, res);
    });

    app.get('/books', (req, res) => {
        bookController.getAllBooks(res);
    });

    app.get('/books/:bookId', (req, res) => {
        bookController.getBookById(req.params.bookId, res);
    });

    app.patch('/books/:bookId', BookRequest, (req, res) => {
        bookController.updateBook(req.params.bookId, req.body, res);
    });

    app.delete('/books/:bookId', (req, res) => {
        bookController.deleteBook(req.params.bookId, res);
    });
}
module.exports = booksRoutes;