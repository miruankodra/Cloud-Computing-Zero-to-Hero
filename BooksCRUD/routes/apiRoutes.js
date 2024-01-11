///////////////////////////////////////////////////////////////////
//---------------------Routing File-----------------------------//
/////////////////////////////////////////////////////////////////

const BookRequest = require('../app/interceptors/BooksInterceptor')
const bookController = require('../app/controllers/BooksController');
const env = require('../environments/environment')

const apiRoutes = (app) => {
    app.get('/', (req, res) => {
        res.status(200).json(env.mapOfCalls);
    })


    app.post('/books', BookRequest, (req, res) => {
        bookController.storeBook(req.body, (errors, result, fields) => {
            if (errors) {
                res.status(500).json(errors);
            } else {
                res.json(result)
            }
        })
    });

    app.get('/books', (req, res) => {
        bookController.getAllBooks((errors, result, fields) => {
            if (errors) {
                res.status(500).json(errors);
            } else {
                res.status(200).json(result)
            }
        })
    });

    app.get('/books/:bookId', (req, res) => {
        bookController.getBookById(req.params.bookId,(errors, result, fields) => {
            if (errors) {
                res.status(500).json(errors);
            } else {
                res.status(200).json(result)
            }
        })
    });

    app.patch('/books/:bookId', BookRequest, (req, res) => {
        bookController.updateBook(req.params.bookId, req.body, (errors, result, fields) => {
            if (errors) {
                res.status(500).json(errors);
            } else {
                res.status(200).json(result)
            }
        })
    });

    app.delete('/books/:bookId', (req, res) => {
        bookController.deleteBook(req.params.bookId, (errors, result, fields) => {
            if (errors) {
                res.status(500).json(errors);
            } else {
                res.status(200).json(result)
            }
        })
    });
}
module.exports = apiRoutes;