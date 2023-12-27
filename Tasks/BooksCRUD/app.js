// Imports
const express = require('express');
const mysql = require('mysql');
const app = express();

const port = 3000;

// Parse requests with JSON payloads
app.use(express.json());

// Open connection to port 3000
app.listen(port, () => {
    console.log(`First Express encounter...listening to port ${port}...`)
})

// Configure DB Connection
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mkodra2023!',
    database: 'books_db'
});

// Establish connection with the DB
con.connect((error) => {
    if (error) {
        console.error(error);
        return;
    } else {
        console.log(`Connected as id ${con.threadId}`)
    }
});

// Object for explaining functionalities and their endpoints
const mapOfCalls =  {
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

// Table name
const tableName = 'books';


// Execute query depending on call
const executeQuery = (type, bookId = null, body = null, callback) => {
    let queryString;
    switch (type) {
        case 'store':
            queryString = `INSERT INTO ${tableName} VALUES (${body.id}, '${body.title}', '${body.author}', ${body.publication_year});`;
            break;
        case 'getBooks':
            queryString = `SELECT * FROM ${tableName};`;
            break;
        case 'getBook':
            queryString = `SELECT * FROM ${tableName} WHERE id='${bookId}';`;
            break;
        case 'updateBook':
            queryString = `UPDATE ${tableName} SET title = '${body.title}', author = '${body.author}', publication_year = '${body.publication_year}' WHERE id = '${bookId}';`;
            break;
        case 'deleteBook':
            queryString = `DELETE FROM ${tableName} WHERE id=${bookId};`;
            break;
        default:
            queryString = `SELECT * FROM ${tableName};`;
            break;
    }
    
    con.query(queryString, callback);
}

// Available routes

app.get('/', (req, res) => {
    res.json(mapOfCalls);
})


app.post('/books/store', (req, res) => {
    executeQuery('store', null, req.body, (errors, result, fields) => {
        if (errors) {
            res.status(500).json(errors);
        }
        res.json(result);
    });
});

app.get('/books', (req, res) => {
    executeQuery('getBooks', null, null, (errors, result, fields) => {

    });
});

app.get('/books/:bookId', (req, res) => {
    executeQuery('getBook', req.params.bookId, null, (errors, result, fields) => {
        if (errors) {
            res.status(500).json(errors);
        }
        res.json(result);
    });
});

app.post('/books/update/:bookId', (req, res) => {
    executeQuery('updateBook', req.params.bookId, req.body, (errors, result, fields) => {
        if (errors) {
            res.status(500).json(errors);
        }
        res.json(result);
    });
});

app.get('/books/delete/:bookId', (req, res) => {
    executeQuery('deleteBook', req.params.bookId, null, (errors, result, fields) => {
        if (errors) {
            res.status(500).json(errors);
        }
        res.json(result);
    })
});