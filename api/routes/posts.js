const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Post = require('../models/post');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true)
    } else {
        cb(null, false)
    }
};

const upload = multer({
    storage: storage, 
    limits: {
        fileSize: 1024 * 1024 * 3
        },
    fileFilter: fileFilter
    });


router.get('/',(req, res, next) => {
    Post.find()
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
router.post('/', upload.single('postImage'), (req, res, next) => {
    const post = new Post({
        _id: new mongoose.Types.ObjectId(),
        recipe_name: req.body.recipe_name,
        description: req.body.description,
        tips: req.body.tips,
        postImage: req.file.path
    });
    post
    .save()
    .then(result => {
        console.log(result)
    })
    .catch(err => console.log(err));
    res.status(200).json({
        message: 'Post created',
        createdPost: post
    });
});
router.get('/:postId',(req, res, next) => { 
    const id = req.params.postId;
    Post.findById(id)
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
router.patch('/:postId',(req, res, next) => {
    const id = req.params.postId;
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Post.update({_id: id}, { $set: updateOps })
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
router.delete('/:postId',(req, res, next) => {
    const id = req.params.postId;
    Post.remove({_id: id})
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
