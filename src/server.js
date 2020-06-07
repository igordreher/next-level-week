const express = require("express")
const server = express()

// Get access to database
const db = require("./database/db")

//Configure Public Folder
server.use(express.static("public"))

// Allow usage of req.body
server.use(express.urlencoded({extended: true}))

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
    // req.query: Query String of url

    return res.render("create-point.html")
})

server.post("/savepoint", (req,res) => {
    
    // Add data to database

    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            city,
            state,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    // req.body: body of form 
    // console.log(req.body)
    
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.city,
        req.body.state,
        req.body.items
    ]

    db.run(query,values, function(err){
        if(err){
            console.log(err)
            return res.send("Erro no cadastro")
        }
        console.log(this)
        return res.render("create-point.html",{saved:true})
    })
})

server.get("/search-result", (req,res) => {
    db.all(`SELECT * FROM places`, function(err,rows){
        if(err){
            return console.log(err);
        }
        return res.render("search-result.html",{
            places: rows
        })
    })
    
})

// Start server
server.listen(3000)