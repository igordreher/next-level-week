const express = require("express")
const server = express()

// Get access to database
const db = require("./database/db")

//Configure Public Folder
server.use(express.static("public"))

//Utilize tamplate engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
    express: server,
    noCache: true
})

//Configure server
server.get("/", (req,res) => {
    return res.render("index.html")
})

server.get("/create-point", (req,res) => {
    return res.render("create-point.html")
})

server.get("/search-result", (req,res) => {
    
    return res.render("search-result.html")
})

// Start server
server.listen(3000)