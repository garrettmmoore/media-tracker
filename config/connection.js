// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    port:3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "media_db"
});

// Establish connection
connection.connect(function(err){
    if (err){
        console.error("error connectiong: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId + " port localhost:3000");
});

// Export connection for our ORM to use
module.exports = connection;