var mongoose = require('mongoose');
var commentSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});
var Comment = module.exports = mongoose.model('comment', commentSchema);
module.exports.get = function (callback, limit) {
    Comment.find(callback).limit(limit); 
}
