const passport = require("passport")
var flash = require('connect-flash');
const LocalStrategy = require("passport-local").Strategy
const User = require("./models/user.js");
const mongoose = require("mongoose")

const {password_validation} = require("./methods")

passport.serializeUser((user, done) => {
    done(null, user._id)
})
passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id)
    done(null, user)
})

passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const user = await User.findOne({email: email})
    if(!user){
        return done(null, false)
    }
    if(!user.comparePassword(password)){
        return done(null, false)
    }
    done(null, user)
}))


passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const user = await User.findOne({email: email})
    const password_state = password_validation(password, req.body.password_validation)
    if(!password_state.okay){
        return done(null, false, password_state.err)
    }else if(user){
        return done(null, false, {message: "user already exists"})
    }

    let hashedPassword = await bcrypt.hash(req.body.password, 10)
    var new_user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        lastname: req.body.lastname,
        user: email,
        password: hashedPassword
    })
    new_user.save().then(user => {
        return done(null, user, {message: "registered successfully"})
    }).catch(err => {
        return done(err, false, {message: err.message})
    })
}
))