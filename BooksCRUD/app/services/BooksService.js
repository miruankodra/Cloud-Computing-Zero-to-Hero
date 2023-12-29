///////////////////////////////////////////////////////////////////
//------------------Services File-------------------------------//
/////////////////////////////////////////////////////////////////

const env = require("../../environments/environment");
const mysql = require("mysql");

const databaseConf = env.databaseConf;
const con = mysql.createConnection({
    host: databaseConf.host,
    user: databaseConf.user,
    password: databaseConf.password,
    database: databaseConf.database
});

const tableName = 'books';

const createBook = (bookRequest, callback) => {
    const queryString = `INSERT INTO ?? VALUES (?, ?, ?, ?);`;
    const values = [tableName, bookRequest.id, bookRequest.title, bookRequest.author, bookRequest.publication_year]
    con.query(queryString, values, callback);
}

const getBooks = (callback) => {
    const queryString = `SELECT * FROM ??;`;
    con.query(queryString, tableName, callback);
}

const getBookById = (bookId, callback) => {
    const queryString = `SELECT * FROM ?? WHERE id=?;`;
    con.query(queryString, [tableName, bookId], callback);
}

const updateBook = (bookId, bookRequest, callback) => {
    // TODO ==> Update only columns that client sends...
    const values = [tableName, bookRequest.title, bookRequest.author, bookRequest.publication_year, bookId]
    const queryString = `UPDATE ?? SET title = ?, author = ?, publication_year = ? WHERE id = ?;`;
    con.query(queryString, values, callback);
}

const deleteBook = (bookId, callback) => {
    const queryString = `DELETE FROM ?? WHERE id=?;`;
    con.query(queryString, [tableName, bookId], callback);
}

module.exports = {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
}
