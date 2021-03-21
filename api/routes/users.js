const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/user');

router.get('/',(req, res, next) => {
    User.find()
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
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        surname: req.body.surname,
        username: req.body.username
    });
    user
    .save()
    .then(result => {
        console.log(result)
    })
    .catch(err => console.log(err));
    res.status(200).json({
        message: 'User created',
        createdUser: user
    });
});
router.get('/:userId',(req, res, next) => { 
    const id = req.params.userId;
    User.findById(id)
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
router.patch('/:userId',(req, res, next) => {
    const id = req.params.userId;
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    User.update({_id: id}, { $set: updateOps })
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
router.delete('/:userId',(req, res, next) => {
    const id = req.params.userId;
    User.remove({_id: id})
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
