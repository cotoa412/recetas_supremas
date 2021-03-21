const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    recipe_name: String,
    description: String,
    tips: String,
});

module.exports = mongoose.model('Post', postSchema);
