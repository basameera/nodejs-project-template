if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

var mysql = require('mysql');
var dbname = process.env.DB_NAME

var connection = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: dbname,
    port: 3306,
    debug: false,
    multipleStatements: true
});

/// NOTE : set ENV variables for production in Heroku

// module.exports.mysql_pool = connection;
// console.log(connection.config.connectionConfig.host)
module.exports = {
    mysql_pool: connection,
    dbname: dbname
}