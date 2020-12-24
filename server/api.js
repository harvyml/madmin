const express = require("express")
const session = require('express-session'); 
const flash = require('connect-flash'); 
require("dotenv").config()
const cors = require("cors")
const {} = require("./modules")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const Place = require("./models/user");
const passport = require("passport");
const initializePassport = require("./passport-config").default;
const axios = require("axios");
const app = express()
const {order_by_name} = require("./methods") 

app.use("/public", express.static("/public/assets"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//session configuration
app.use(session({ 
    secret: process.env.SECRET_WORD_FOR_SESSION_HANDLING, 
    saveUninitialized: true, 
    resave: true
})); 
app.use(passport.initialize())
app.use(passport.session())
//flash configuration
app.use(flash())

//db configuration
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.get("/", (req, res) => {
    // !req.query.err ? res.send("Hola, tu estado es: " + req.flash("success")) : res.send("Hola, tu estado es: " + req.flash("error").reduce((acc, el) => acc+el))
    res.send("Something")
})

app.get("/user", (req, res) => {
    res.json(req.user)
})
app.get("/err", (req, res) => {
    res.send(req.flash("error"))
})

app.post("/login", passport.authenticate("local-signin", {
    successRedirect: "/api/user",
    successMessage: "Welcome!",
    successFlash: false,
	failureRedirect: "/api?err=true",
	failureFlash: true
}))

app.post("/register", passport.authenticate("local-signup", {
    successRedirect: "/api/user",
	failureRedirect: "/api/err",
	failureFlash: true
}))

app.get("/logout", (req, res) => {
    req.logout()
    res.redirect("/login")
})


app.get("/getusers", (req, res) => {
    axios.get("https://api.mocki.io/v1/c6b2887f").then(snap => {
        res.json(
            snap.data
        )
    }).catch(err => res.json(err))
})

app.get("/orderedusers", (req, res) => {
    axios.get("https://api.mocki.io/v1/c6b2887f").then(snap => {
        res.json(
            order_by_name(snap.data)
        )
    }).catch(err => res.json(err))
})



module.exports = app
