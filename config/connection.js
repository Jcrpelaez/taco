// Pull in required dependencies
var mysql = require("mysql");

// Create the MySQL connection object
var connection;

if (process.env.JAWSDB_URL) {
  // DB is JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // DB is local on localhost
  connection = mysql.createConnection({
    port: 3306,
    host: "lgg2gx1ha7yp2w0k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
    user: "zj55pevvubj25nzp	",
    password: "bti4fqrf5v8bsj86",
    database: "hx9ig8vaccehj3ts	"
  });
}

// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error("ERROR: MySQL connection error -- " + err.stack + "\n\n");
    return;
  }
  console.log(
    "Connected to MySQL database as id " + connection.threadId + "\n\n"
  );
});

// Export connection for ORM use
module.exports = connection;
