// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
    connection = mysql.createConnection({
        port: 3000,
        host: "localhost",
        user: "root",
        password: "Pugluverg51",
        database: "media_db"
    });
};

// Establish connection
// connection.connect(function(err){
//     if (err){
//         console.error("error connectiong: " + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threadId + " port localhost:3000");
// });

connection.connect();

// Export connection for our ORM to use
module.exports = connection;