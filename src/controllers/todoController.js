const { createTodo, getTodos, deleteTodo, updateTodo } = require('../models/todoModel');

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

const removeTodo = async (req, res) => {
    try {
        const userId = req.user.id
        const { id } = req.params

        const deletedTodo = await deleteTodo(userId, id)
        console.log(deletedTodo);
        if (!deleteTodo) return res.status(404).send({ msg: "unauthorized or todo not found" })
        res.json({ msg: "To-Do deleted successfully", todo: deletedTodo })
    }
    catch (error) {
        res.status(500).json({ msg: "server error" })
    }
}

const editTodo = async (req, res) => {
    try {
        const userId = req.user.id;
        console.log(userId);
        const { id } = req.params;
        const updated = await updateTodo(userId, id)
        console.log(updated);
        if (!updated) return res.status(404).send({ msg: "todo not found or unauthorized" })
        res.json({ updateTodo, msg: "updated successfully" })
    }
    catch (error) {
        res.status(500).json({ msg: "server error" })
    }
}

module.exports = { todoList, addTodo, removeTodo, editTodo }