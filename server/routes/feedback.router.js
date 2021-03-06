const express = require('express');
const router = express.Router();
let pool = require('../modules/pool');


// GET feedback for the admin view
router.get('/', (req, res) => {
    console.log('get feedback');
    // Find all the feedback 
    // SELECT * in the pool.query 
    pool.query(`SELECT * FROM "feedback";`)
        .then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Error GET /feedback', error);
        res.sendStatus(500);
    })
});

// POST -- Add new feedback to database 
router.post('/', (req, res) => {
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1,$2,$3,$4);`, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
        .then(() => {  // do not need results for a post
            res.sendStatus(201)
        }).catch((error) => {
            console.log('Error with server-side POST:', error);
            res.send(500);
        })
});

// Delete a feedback entry
router.delete('/:id', (req, res) => {
    console.log('DELETE /feedback (by id)', req.params.id);
    pool.query(`DELETE FROM "feedback"
    WHERE "id"=$1;`, [req.params.id])
        .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error DELETE /feedback', error);
        res.sendStatus(500);
    })
});

module.exports = router;