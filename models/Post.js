const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    content: {
        type: String,
        require: true
    },
    user_id: {
        type: String,
        require: true
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    Modified_date: {
        type: Date,
        default: null
    }
},{
    versionKey:false
})

module.exports = mongoose.model('Post', postSchema)