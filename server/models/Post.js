const mongoose = require('mongoose');

/**
 * @module server
 */

/**
 * Post schema to use in mongoose
 * @type {mongoose.Schema}
 */
const PostSchema  = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Posts', PostSchema);