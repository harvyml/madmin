const mongoose = require("mongoose")
var Schema = mongoose.Schema


const todo = new Schema({
    _id: Schema.Types.ObjectId,
    userId: {type: Schema.Types.ObjectId, required: true},
    date: Number,
    text: String,
}, {collection: "todos"})

module.exports = mongoose.model('todo', todo)