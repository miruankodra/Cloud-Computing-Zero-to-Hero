'use strict';

// Imports
const express = require('express');
const app = express();
const routes = require('../routes/booksRoutes');
const env = require('../environments/environment')

// Parse requests with JSON payloads
app.use(express.json());

// Include routes
routes(app);

// Open connection to port 3000
app.listen(env.connectionPort, () => {
    console.log(`Listening to port ${env.connectionPort}...`)
})



