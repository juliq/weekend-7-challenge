const express = require('express');
const router = express.Router();
// require SQL?



// GET all the feedback for the admin view
router.get('/', (req, res) => {
    console.log('get answers');
    // Find all the answers/feedback and return them
    answers.find({}).then((result) => {
        res.send(result);
    }).catch((error) => {
        console.log('Error GET /_____', error);
        res.sendStatus(500);
    })
});

// POST -- Add new feedback to database // post to specific column?????
// router.post('/', (req,res) => {
//     console.log('POST /feedback/answer1', req.body);
//     const 
//     answers.push(req.body);
//     res.sendStatus(201);
// });


// Delete all feedback
// router.delete('/:id', (req,res) => {
//     console.log('DELETE /feedback (by id)', req.params.id);
//     answers.findByIdAndRemove({_id: req.params.id}).then((result) => {
//         res.sendStatus(200);
//     }).catch((error) => {
//         console.log('Error DELETE /feedback', error);
//         res.sendStatus(500);
//     })
// });

module.exports = router;