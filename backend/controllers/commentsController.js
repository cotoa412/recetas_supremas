//Import Bio Model
Comment = require('./commentsModel');
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
//For creating new bio
exports.add = function (req, res) {
    var comment = new Comment();
    bio.text = req.body.name? req.body.name: bio.name;
    bio.username = req.body.email;
    bio.created_at = req.body.phone;
//Save and check error
    bio.save(function (err) {
        if (err)
            res.json(err);
res.json({
            message: "New Bio Added!",
            data: bio
        });
    });
};
// View Bio
exports.view = function (req, res) {
    Bio.findById(req.params.bio_id, function (err, bio) {
        if (err)
            res.send(err);
        res.json({
            message: 'Bio Details',
            data: bio
        });
    });
};
// Update Bio
exports.update = function (req, res) {
    Bio.findById(req.params.bio_id, function (err, bio) {
        if (err)
            res.send(err);
        bio.name = req.body.name ? req.body.name : bio.name;
        bio.email = req.body.email;
        bio.phone = req.body.phone;
        bio.address = req.body.address;
//save and check errors
        bio.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Bio Updated Successfully",
                data: bio
            });
        });
    });
};
// Delete Bio
exports.delete = function (req, res) {
    Bio.deleteOne({
        _id: req.params.bio_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Bio Deleted'
        })
    })
}