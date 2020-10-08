const mongoose = require("mongoose")
const { schema } = require("./user")
// const userSchema = require("./user")
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
    date: {
        type: Date,
        default: Date.now
    },
    comments: [{
        // user: {
        //     type: Schema.Types.ObjectId,
        //     ref: "User",
        //     required: true
        // },
        user: String,
        text: String,
        date: {
            type: Date,
            default: Date.now
        },
    }]
    // comments: {
    //     type: [Object],
    //     default: []
    // }

})

module.exports = mongoose.model("Issue", issueSchema)