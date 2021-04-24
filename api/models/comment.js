const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    comment_body: String,
});

module.exports = mongoose.model('Comment', commentSchema);
