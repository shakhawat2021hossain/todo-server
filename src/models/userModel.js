const pool = require('../config/db')

const createUser = async (name, email, password) => {
    const result = await pool.query("INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *", [name, email, password])
    // console.log(result);
    return result.rows[0]
}

const findByEmail = async (email) =>{
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email])
    console.log(result);
    return result.rows[0]
}



module.exports = { createUser, findByEmail }