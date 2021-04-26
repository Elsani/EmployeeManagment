const mongoose = require ('mongoose');

const PostsSchema = mongoose.Schema({
    post: String,

    updated_date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Posts', PostsSchema);