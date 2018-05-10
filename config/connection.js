var mysql  = require ("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
})

connection.connect(function(err){
    if (err){
        console.error('THERE IS AN ERROR!')
        return;
    }
console.log('CONNECTED TO MYSQL!')
}
)

module.exports = connection;