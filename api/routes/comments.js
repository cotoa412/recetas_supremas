const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Comment = require('../models/comment');

router.get('/',(req, res, next) => {
    Comment.find()
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});
router.post('/',(req, res, next) => {
    const comment = new Comment({
        _id: new mongoose.Types.ObjectId(),
        comment_body: req.body.comment_body,
    });
    comment
    .save()
    .then(result => {
        console.log(result)
    })
    .catch(err => console.log(err));
    res.status(200).json({
        message: 'New comment added',
        createdComment: comment
    });
});
router.get('/:commentId',(req, res, next) => { 
    const id = req.params.commentId;
    Comment.findById(id)
    .exec()
    .then(doc => {
        console.log("From DB", doc);
        if(doc){
            res.status(200).json(doc);
        } else{
            res.status(404).json({message: "Not found in DB"});
        }
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});
router.patch('/:commentId',(req, res, next) => {
    const id = req.params.commentId;
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Comment.update({_id: id}, { $set: updateOps })
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
        error: err
        });
    });
});
router.delete('/:commentId',(req, res, next) => {
    const id = req.params.commentId;
    Comment.remove({_id: id})
    .exec()
    .then(result => {
        res.status(200).json(res);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router
