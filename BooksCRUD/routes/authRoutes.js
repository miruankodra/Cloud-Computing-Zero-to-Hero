///////////////////////////////////////////////////////////////////
//---------------------Routing File-----------------------------//
/////////////////////////////////////////////////////////////////


const authRoutes = (app) => {

    app.post('/login', BookRequest, (req, res) => {
        bookController.storeBook(req.body, res);
    });

    app.get('/books', (req, res) => {
        bookController.getAllBooks(res);
    });
}
module.exports = booksRoutes;