const mongoose = require("mongoose")
const Schema = mongoose.Schema

const issueSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,

    },
    votes: {
        type: Array,
        required: true,
        default: 0
    },
    
})

module.exports = mongoose.model("Issue", issueSchema)