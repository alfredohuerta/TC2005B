const mysql = requere('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'database_name',
    paswors: 'TC2005B'
});

module.exports = pool.promise();