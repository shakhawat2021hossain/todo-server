const pool = require('../config/db')

const getTodos = async (user_id) => {
    const result = await pool.query("SELECT * FROM todos WHERE user_id = $1", [user_id]);
    console.log(result);
    return result.rows
}

const createTodo = async (user_id, title) => {
    const result = await pool.query(
        "INSERT INTO todos(user_id, title) VALUES($1, $2) RETURNING *", [user_id, title]
    )
    console.log(result);
    return result.rows[0]
}

module.exports = { createTodo, getTodos }