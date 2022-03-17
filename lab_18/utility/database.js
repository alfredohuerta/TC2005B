const mysql = requere('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    databasename: '',
    password: 'TC2005B'
});