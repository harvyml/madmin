const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
var Schema = mongoose.Schema


const user = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    lastname: String,
    user: String, //this is an email address
    password: String,
    email: String
}, {collection: "users"})


user.methods.comparePassword = function(password){
    try {
        return bcrypt.compareSync(password, this.password);
    }catch(err){
        return err.message
    }
}


module.exports = mongoose.model('user', user)