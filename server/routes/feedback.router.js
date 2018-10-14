const express = require('express');
const router = express.Router();
let pool = require('../modules/pool');
// require SQL? require pg is in pool.js



// GET all the feedback for the admin view
router.get('/', (req, res) => {
    console.log('get feedback');
    // Find all the feedback and return them --- but we don't want ALL the feedback
    // Do I SELECT * in the pool.query and then narrow it down in the res.send???????????????
    // feedback.find({}).then((result) => {
    // res.send(result);
    pool.query(`SELECT "feeling", "understanding", "support", "comments"
    FROM "feedback"`)
        .then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Error GET /feedback', error);
        res.sendStatus(500);
    })
});

// POST -- Add new feedback to database // post to specific column?????
router.post('/', (req, res) => {
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1,$2,$3,$4)`, [req.body.feedback])
        .then((results) => {
            res.send(results.rows)
        }).catch((error) => {
            console.log('Error with server-side POST:', error);
            res.send(500);
        })
});

// Delete all feedback
router.delete('/:id', (req, res) => {
    console.log('DELETE /feedback (by id)', req.params.id);
    feedback.findByIdAndRemove({ _id: req.params.id }).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error DELETE /feedback', error);
        res.sendStatus(500);
    })
});

module.exports = router;