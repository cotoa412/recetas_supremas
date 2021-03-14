//Import comment Model
Comment = require('../models/commentsModel');
//For index
exports.index = function (req, res) {
    Comment.get(function (err, comment) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Comment Successfully!",
            data: comment       
        });
    });
};
//For creating new comment
exports.add = function (req, res) {
    var comment = new Comment();
    comment.text = req.body.name? req.body.name: comment.name;
    comment.username = req.body.email;
    comment.created_at = req.body.phone;
//Save and check error
    comment.save(function (err) {
        if (err)
            res.json(err);
res.json({
            message: "New comment Added!",
            data: comment
        });
    });
};
// View comment
exports.view = function (req, res) {
    comment.findById(req.params.comment_id, function (err, comment) {
        if (err)
            res.send(err);
        res.json({
            message: 'comment Details',
            data: comment
        });
    });
};
// Update comment
exports.update = function (req, res) {
    comment.findById(req.params.comment_id, function (err, comment) {
        if (err)
            res.send(err);
        comment.name = req.body.name ? req.body.name : comment.name;
        comment.email = req.body.email;
        comment.phone = req.body.phone;
        comment.address = req.body.address;
//save and check errors
        comment.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "comment Updated Successfully",
                data: comment
            });
        });
    });
};
// Delete comment
exports.delete = function (req, res) {
    comment.deleteOne({
        _id: req.params.comment_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'comment Deleted'
        })
    })
}