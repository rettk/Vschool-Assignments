const mongoose = require("mongoose")
const Schema = mongoose.Schema


//Movie Blueprint

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
        enum: ["action", "fantasy", "comedy", "horror", "romance"]
    },

    releaseYear: Number,

})


module.exports = mongoose.model("Movie", movieSchema)