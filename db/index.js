const { Client, Pool } = require('pg');

const pool = new Pool({
    uri: process.env.DB_URI,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    ssl: process.env.DB_SECURE
})


module.exports = {
    getPool(){
        return pool
    },
}