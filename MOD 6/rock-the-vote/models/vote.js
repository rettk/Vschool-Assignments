const mongoose = require("mongoose")
const Schema = mongoose.Schema

const voteSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    upVote: {
        type: Boolean
    }
})

module.exports = mongoose.model("Vote", voteSchema)