const mongoose = require("mongoose")
const { schema } = require("./user")
const Schema = mongoose.Schema

const commentSchema = new Schema({
    
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        text: String,
        date: {
            type: Date,
            default: Date.now
        },
        

    })

module.exports = mongoose.model("Comment", commentSchema)