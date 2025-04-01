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

const deleteTodo = async (userId, todoId) => {
    const result = await pool.query("DELETE FROM todos WHERE id = $1 AND user_id = $2 RETURNING *", [todoId, userId])
    return result.rows[0]
}

const updateTodo = async (userId, todoId) => {
    const result = await pool.query("UPDATE todos SET completed = NOT completed WHERE id = $1 AND user_id = $2 RETURNING *", [todoId, userId])
    return result.rows[0]
}

module.exports = { createTodo, getTodos, deleteTodo, updateTodo }