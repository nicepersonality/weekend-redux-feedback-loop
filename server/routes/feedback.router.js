const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET Route
router.get('/', (req, res) => {
    // Get all of the submissions from the feedback table
    const sqlText = `SELECT * FROM "feedback" ORDER BY "date" DESC`;
    pool.query(sqlText)
    .then((result) => {
        // console.log(result);
        res.send(result.rows);
    })
    .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500); // internal server error
    }); // end pool query
}); // end GET route

// POST route
router.post('/', (req, res) => {
    // Post new feedback to the feedback table
    // console.log('POST; req.body:', req.body);
    const newFeedback = req.body;
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    const queryValues = [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments];
    pool.query(queryText, queryValues).then( (result) => {
        // console.log('Post result:', result);
        res.sendStatus(201); // created
    }).catch( (error) => {
        console.log( 'Error making query:', error );
        res.sendStatus(500); // internal server error
    }); // end pool query
}); // end POST route

// PUT Route
router.put('/flag/:id', (req, res) => {
    // Flag the feedback with given id for further review
    // console.log(req.params);
    const feedbackId = req.params.id;
    let queryText = `UPDATE "feedback"
        SET "flagged" = NOT flagged
        WHERE "id" = $1;`;
    pool.query(queryText, [feedbackId])
    .then( (result) => {
        // console.log('Response from server:', result);
        res.sendStatus(200); // OK
    }).catch( (error) => {
        console.log( 'Error making query:', error );
        res.sendStatus(500); // internal server error
    }); // end pool query
}); // end PUT /flag route

// DELETE Route
router.delete('/:id', (req, res) => {
    // Delete the feedback with the given id
    // console.log(req.params);
    const feedbackId = req.params.id;
    let queryText = `DELETE FROM "feedback" WHERE "id" = $1;`;
    pool.query(queryText, [feedbackId]).then( (result) => {     
        // console.log('Response from server:', result);
        res.sendStatus(200); // OK
    }).catch( (error) => {
        console.log( 'Error making query:', error );
        res.sendStatus(500); // internal server error
    }); // end pool query
  }); // end DELETE route

module.exports = router;
