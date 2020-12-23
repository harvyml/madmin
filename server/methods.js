const passport = require("passport")

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


module.exports = {
    password_validation
}