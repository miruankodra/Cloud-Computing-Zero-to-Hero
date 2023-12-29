// Env File

const env = {

    connectionPort: 3000,

    databaseConf : {
        host: 'localhost',
        user: 'root',
        password: 'Mkodra2023!',
        database: 'books_db'
    },

    mapOfCalls: {
        greeting: 'Welcome to books basic CRUD application',
        instruction: 'Below you ca read all functions, the call types, their endpoints and the needed body or request parameters.',
        storeBook: {
            type: 'POST',
            endpoint: '/books/store',
            body: {
                id: 'id number as a number',
                title: 'book title',
                author: 'book author',
                publication_year: 'year as a number'
            }
        },
        getAllBooks: {
            type: 'GET',
            endpoint: '/books',
        },
        getBookByID: {
            type: 'GET',
            endpoint: '/books/bookId'
        },
        updateBook: {
            type: 'POST',
            endpoint: '/books/update/bookId',
            body: {
                title: 'book title',
                author: 'book author',
                publication_year: 'year as a number'
            }
        },
        deleteBook: {
            type: 'GET',
            endpoint: '/books/delete/bookId'
        }


    }

}


module.exports = env;