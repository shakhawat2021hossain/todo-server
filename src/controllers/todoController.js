const { createTodo, getTodos } = require('../models/todoModel');

const todoList = async (req, res) => {
    try {
        const userId = req.user.id

        const todos = await getTodos(userId)
        res.json(todos)

    }
    catch (error) {
        res.status(500).json({ msg: "server error" })
    }
}

const addTodo = async (req, res) => {
    try {
        const user_id = req.user.id
        // console.log(user_id);
        const { title } = req.body;
        if (!title) return res.status(401).send({ msg: "title missing" })
        const todo = await createTodo(user_id, title)
        res.status(201).json(todo)
    }
    catch (error) {
        res.status(500).json({ msg: "server error" })
    }
}

module.exports = { todoList, addTodo }