const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("dotenv").config()

const commentSchema = new Schema(
    {
        title: {type: String, required: true},
        description: {type: String},
    }
)
const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment