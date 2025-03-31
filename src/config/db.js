const { Pool } = require('pg');
require('dotenv').config();


const pool = new Pool({
  connectionString: process.env.SUPABASE_DB_URL,
  ssl: {
    rejectUnauthorized: false
  }

});

pool.connect()
  .then(() => console.log("DB connected successfully"))
  .catch(error => console.log(error))

module.exports = pool;

