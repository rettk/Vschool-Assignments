const mongoose = require("mongoose")
const Schema = mongoose.Schema

const issueSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    upVotes: {
        type: Array,
        required: true
    },
    downVotes: {
        type: Array,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    comments: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        text: String
    }]

})

module.exports = mongoose.model("Issue", issueSchema)