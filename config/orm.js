// Import the MySQL connection object
var connection = require("./connection.js");

// Create the ORM object to perform SQL queries
var orm = {
  // Function that returns all table entries
  selectAll: function(tableInput, cb) {
    // Construct the query string that returns all rows from the target table
    var queryString = "SELECT * FROM " + tableInput + ";";

    // Perform the database query
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      // Return results in callback
      cb(result);
    });
  }
};
