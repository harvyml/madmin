const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv").config()
const fs = require("fs")
const bodyParser = require("body-parser")
const app = express()
app.use("/public", express.static("./public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))  
const router = express.Router({strict: true})

//external
const api = require("./api")
// const routes = require("./routes")
const register_html = fs.readFileSync("./public/register.html", "utf8")
const login_html = fs.readFileSync("./public/login.html", "utf8")
const panel_html = fs.readFileSync("./public/panel.html", "utf8")
//using api route
// app.use("/", routes)

app.use("/", router)
router.use("/api", api)

router.get("/", (req, res) => {
    res.redirect("/panel")
})
router.get("/register", (req, res) => {
    res.send(register_html)
})

router.get("/login", isAuthenticatedSendToPanel, (req, res) => {
    res.send(login_html)
})

router.get("/panel", async (req, res) => {
    res.send(panel_html)
})

function isAuthenticated(req, res, next){
    if(!req.isAuthenticated()){
        res.redirect("/login")
    }
    return next()
}

function isAuthenticatedSendToPanel(req, res, next){
    if(req.user){
        res.redirect("/panel")
    }else{
        return next()
    }
}


app.listen(process.env.PORT || 3000, () => console.log("listening on port 3000"))
