// Import sqlite dependencies
const sqlite = require("sqlite3").verbose()

//Create object to operate database
const db = new sqlite.Database('./src/database/database.db')

module.exports = db
// Utilize the object to operate
// db.serialize( () => {

//     Create a table
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         city TEXT,
    //         state TEXT,
    //         items TEXT
    //     );
    // `)

    // // Insert data into table
    // const query = `
    //     INSERT INTO places(
    //         image,
    //         name,
    //         address,
    //         address2,
    //         city,
    //         state,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    // `
    // const values = [
    //     "https://upload.wikimedia.org/wikipedia/commons/7/7b/Recycling_symbol.svg",
    //     "<Nome da Empresa>",
    //     "<Endereço1>",
    //     "<Endereço2>",
    //     "<Cidade>",
    //     "<Estado>",
    //     "<Itens de Coleta>",
    // ]

    // db.run(query,values, function(err) {
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // })

//     // Consult data from database
//     // db.all(`SELECT * FROM places`, function(err,rows) {
//     //     if(err){
//     //         return console.log(err)
//     //     }
//     //     console.log("Here is the data")
//     //     console.log(rows)
//     // })

        //Delete data from database
        // db.run(`DELETE FROM PLACES WHERE id=?`,[1],function(err){
        //     if(err){
        //         return console.log(err)
        //     }
        //     console.log("Registro deletado com sucesso")
        // })
// })