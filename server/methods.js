const passport = require("passport")
const Todo = require("./models/todo")
const mongoose = require("mongoose")
const { findOneAndRemove } = require("./models/todo")
/**
 * Compares and returns an error if:
 * 1. The password and password_validation don't match
 * 2. The password doesn't have at least one number
 * 3. the password is 
 * @param {string} password 
 * @param {string} password_validation 
 */
function password_validation(password, password_validation){
    var numbers_in_string = password.match("(\d+)/")
    if(password != password_validation){
        return {err: {message: "Please check that the 'password' and 'password validation' fields match"}, okay: false}
    }else if(password.length < 7){
        return {err: {message: "Your password must have at least seven characters"}, okay: false}
    }else if(numbers_in_string && numbers_in_string.length < 1){
        return {err: {message: "Your password must have at least one number"}, okay: false}
    }
    return {okay: true}
}


/**
 * orders an array by its field 'nombre', returns a promise
 * @param {*} arr 
 */
function order_by_name(arr){
    var ordered = arr.sort((a, b) => a.nombres.localeCompare(b.nombres, 'es', { sensitivity: 'base' }))
    return ordered
}


function create_todo(text, userId){
    var new_todo = new Todo({
        _id: new mongoose.Types.ObjectId(),
        userId,
        text,
        date: new Date().getTime()
    })

    return new_todo.save()
}

async function get_todos_from_user(userId){
    var result = await Todo.find({userId: userId}).sort({_id: -1})
    return result
}

async function get_todos_from_user(_id, userId){
    var result = await Todo.find({userId, _id}).sort({_id: -1})
    return result
}


async function remove_todo_from_user(_id){
    console.log("removing todo")
    var result = await Todo.findOneAndRemove({_id: _id})
    return result
}

module.exports = {
    password_validation,
    order_by_name,
    create_todo,
    get_todos_from_user,
    remove_todo_from_user
}