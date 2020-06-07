// Import sqlite dependencies
const sqlite = require("sqlite3").verbose()

//Create object to operate database
const db = new sqlite.Database('./src/database/database.db')

module.exports = db
// Utilize the object to operate
// db.serialize( () => {

//     // Create a table
//     // db.run(`
//     //     CREATE TABLE IF NOT EXISTS places (
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //         image TEXT,
//     //         name TEXT,
//     //         address TEXT,
//     //         address2 TEXT,
//     //         city TEXT,
//     //         state TEXT,
//     //         items TEXT
//     //     );
//     // `)

//     // Insert data into table
//     const query = `
//         INSERT INTO places(
//             image,
//             name,
//             address,
//             address2,
//             city,
//             state,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `
//     const values = [
//         "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//         "Papersider",
//         "Guilherme Gemballa, Jardim América",
//         "Nº 260",
//         "Rio do Sul",
//         "Santa Catarina",
//         "Papeis e Papelão",
//     ]

//     db.run(query,values, function(err) {
//         if(err){
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     })

//     // Consult data from database
//     // db.all(`SELECT * FROM places`, function(err,rows) {
//     //     if(err){
//     //         return console.log(err)
//     //     }
//     //     console.log("Here is the data")
//     //     console.log(rows)
//     // })
// })