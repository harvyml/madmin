const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv").config()
const fs = require("fs")
const bodyParser = require("body-parser")
const app = express()
app.use("/public", express.static("./public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
const {inactivity_alert_and_logout} = require("./methods")



//external
const api = require("./api")
// const routes = require("./routes")
const register_html = fs.readFileSync("./public/register.html", "utf8")
//using api route
// app.use("/", routes)
app.use("/api", api)
app.get("/", (req, res) => {
    res.send(register_html)
})

app.listen(3000 || process.env.PORT, () => console.log("listening on port 3000"))
