const mysql = require('mysql')
const util = require('util')

const pool = mysql.createPool({
    connectionLimit:10,
    host:'node-server.mysql.database.azure.com',
    user:'myadmin',
    password:'TallerNode1',
    database:'empleados'
});

pool.query = util.promisify(pool.query)
module.exports = pool;