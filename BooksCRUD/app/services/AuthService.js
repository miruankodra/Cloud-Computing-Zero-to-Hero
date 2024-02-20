'use strict';

const upash = require('upash');
const con = require('../../Config/Database/database');
const {hash} = require("upash");

const tableName = 'users';


const login = (userRequest, callback) => {
    const queryString = `SELECT * FROM ?? WHERE email = ? AND password = ? AND is_active = ?;`;
    const password = hash(userRequest.password);
    const values = [tableName, userRequest.email, password, true];
    con.query(queryString, values, callback);
}

const register = (createUser, callback) => {
    const queryString = `INSERT INTO ?? VALUES(?, ?, ?, ?, ?)`;
    const password = hash(createUser.password);
    const values = [tableName, null, createUser.email, password, 'Customer', true];
    con.query(queryString, values, callback);
}

module.exports = {
    login,
    register
}