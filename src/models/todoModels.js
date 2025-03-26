const pool = require('../config/db')

const getTodos = async () => {
    const result = await pool.query("SELECT * FROM todos");
    // console.log(result);
    return result.rows
}

const getATodo = async (id) =>{
    const result = await pool.query("SELECT * FROM todos WHERE id = $1", [id])
    console.log(result);
    return result.rows[0]
}

const addTodo = async (title, description) => {
    const result = await pool.query(
        "INSERT INTO todos(title, description) VALUES($1, $2) RETURNING *", [title, description]
    )
    // console.log(result);
    return result.rows[0]
}

const updateTodo = async (id, title, description, completed) => {
    const result = await pool.query(
        `UPDATE todos SET title = $1, description = $2, completed = $3 
     WHERE id = $4 RETURNING *`, [title, description, completed, id]
    )
    return result.rows[0];

}

const deleteTodo = async (id) => {
    const result = await pool.query(
        "DELETE FROM todos WHERE id = $1 returning *", [id]
    )
    return result.rows[0]

}

module.exports = { getTodos, addTodo, deleteTodo, updateTodo, getATodo }