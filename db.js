// Get an instance of mysql we can use in the app
var mysql = require("mysql");
require("dotenv").config();

// Create a 'connection pool' using the provided credentials
var pool = mysql.createPool({
	connectionLimit: 10,
	host: process.env.RDS_HOSTNAME,
	user: process.env.RDS_USERNAME,
	password: process.env.RDS_PASSWORD,
	port: process.env.RDS_PORT,
	database: process.env.RDS_DATABASE,
});

// Export it for use in our applicaiton
module.exports.pool = pool;
