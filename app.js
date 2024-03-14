const express = require('express');
const app = express();

app.use(express.json());

/**
 * GET request route that returns "Salam Malaysia Madani!!" as JSON data.
 * @name GET/api/
 * @function
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get('/api/', (req, res) => {
    res.json({ message: 'Salam Malaysia Madani' });
});


// TODO: Exercise 5


// TODO: Exercise 6


// TODO: Challenge #1


// TODO: Challenge #2


module.exports = app;
