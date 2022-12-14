const mysql = require('mysql')
const util = require('util')

const pool = mysql.createPool({
    connectionLimit : 1000,
    host:'nodedb.mysql.database.azure.com',
    user:'myadmin',
    password:'TallerNode1',
    database:'empleados'
});

// const pool = mysql.createPool({
//     connectionLimit : 5,
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'empleados'
// });

pool.query = util.promisify(pool.query)
module.exports = pool;