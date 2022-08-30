let dbConnection = require('./db/db_connect');
callDb();

function callDb() {

    try {

        let connection = dbConnection.dbConnection();

        connection.query('SELECT * from competition', function (error, results, fields) {
            if (!error) {
                console.log(results);
            } else {
                console.log(error);
            }
        });
        connection.end();


    } catch (err) {
        console.log(err);
    }
}