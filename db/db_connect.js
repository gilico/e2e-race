const mysql = require('mysql');

let connection;

module.exports = {

dbConnection: function () {

    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'e2e_race',
    });
    connection.connect();
    return connection;
}

};


// let mysql = require('mysql');

// let connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'e2e_race',
    
// });

// connection.connect(function(err) {
//     if (err) {
//       return console.error('error: ' + err.message);
//     }
//     console.log('Connected to the MySQL server.');
// });

// module.exports = connection;

// //   let sql = `SELECT * FROM competition`;
// // connection.query(sql, (error, results, fields) => {
// //   if (error) {
// //     return console.error(error.message);
// //   }
// //   console.log(results);
// // });



