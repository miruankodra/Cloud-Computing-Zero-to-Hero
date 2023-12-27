const express = require('express');
const mysql = require('mysql');
const app = express();

const port = 3000;

app.use(express.json());

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mkodra2023!',
    database: 'books_db'
});

const tableName = 'books';

con.connect((error) => {
    if (error) {
        console.error(error);
        return;
    } else {
        console.log(`Connected as id ${con.threadId}`)
    }
});

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

const storeBook = (values ,callback) => {
    const selectQuery = `INSERT INTO ${tableName} VALUES (${values.id}, '${values.title}', '${values.author}', ${values.publication_year});`;
    return con.query(selectQuery, callback)
}

const getAllBooks = (callback) => {
    const selectQuery = `SELECT * FROM ${tableName};`;
    return con.query(selectQuery, callback)
}

const getBookByID = (id ,callback) => {
    const selectQuery = `SELECT * FROM ${tableName} WHERE id='${id}';`;
    return con.query(selectQuery, callback)
}

const updateBook = (id, values, callback) => {
    const selectQuery = `UPDATE ${tableName} SET title = '${values.title}', author = '${values.author}', publication_year = '${values.publication_year}' WHERE id = '${id}';`;
    return con.query(selectQuery, callback)
}

const deleteBook = (id ,callback) => {
    const selectQuery = `DELETE FROM ${tableName} WHERE id=${id};`;
    return con.query(selectQuery, callback)
}

app.get('/', (req, res) => {
    res.json(mapOfCalls);
})


app.post('/books/store', (req, res) => {
    storeBook(req.body ,(errors, result, fields) => {
        if (errors) {
            res.status(500).json(errors);
        }
        res.json(result);
    })
});

app.get('/books', (req, res) => {
    getAllBooks((errors, result, fields) => {
        if (errors) {
            res.status(500).json(errors);
        }
        res.json(result);
    })
});

app.get('/books/:bookId', (req, res) => {
    getBookByID(req.params.bookId,(errors, result, fields) => {
        if (errors) {
            res.status(500).json(errors);
        }
        res.json(result);
    })
});

app.post('/books/update/:bookId', (req, res) => {
    updateBook(req.params.bookId, req.body, (errors, result, fields) => {
        if (errors) {
            res.status(500).json(errors);
        }
        res.json(result);
    })
});

app.get('/books/delete/:bookId', (req, res) => {
    deleteBook(req.params.bookId, (errors, result, fields) => {
        if (errors) {
            res.status(500).json(errors);
        }
        res.json(result);
    })
});



app.listen(port, () => {
    console.log(`First Express encounter...listening to port ${port}...`)
})


