const express = require("express")
const server = express()

//Configure Public Folder
server.use(express.static("public"))

//Configure server
server.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/index.html")
})

server.get("/create-point", (req,res) => {
    res.sendFile(__dirname + "/views/create-point.html")
})

server.get("/search-result", (req,res) => {
    res.sendFile(__dirname + "/views/search-result.html")
})

// Start server
server.listen(3000)