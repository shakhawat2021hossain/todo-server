const Todo = require('../models/todoModels');

const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.getTodos()
        res.json(todos)

    }
    catch (error) {
        res.status(500).json({ msg: "server error" })
    }
}

const addTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title) return res.status(401).send({ msg: "title missing" })
        const newTodo = await Todo.addTodo(title, description)
        res.status(201).json(newTodo)
    }
    catch (error) {
        res.status(500).json({ msg: "server error" })
    }
}

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params
        const deleteOne = await Todo.deleteTodo(id)
        if (!deleteOne) return res.status(404).json({ msg: "todo is not found" })
        res.status(200).json({ msg: "deleted a todo successfully" })

    }
    catch (error) {
        console.log(error);
        res.status(500).send({ msg: "internal server error" })
    }
}

const updateTodo = async (req, res) => {
    try {
        const { title, description, completed } = req.body
        // console.log(req.params.id, title, description, completed);
        const updatedTodo = await Todo.updateTodo(req.params.id, title, description, completed)
        if (!updatedTodo) return res.status(404).json({ msg: "Todo not found" });
        res.status(200).json(updatedTodo)
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ msg: "internal server error" })
    }
}

const getATodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.getATodo(id)
        if (!todo) return res.status(404).json({ msg: "not found" })
        res.status(200).json(todo)

    }
    catch (error) {
        console.log(error);
        res.status(500).send({ msg: "internal server error" })
    }
}

module.exports = { getAllTodos, addTodo, deleteTodo, updateTodo, getATodo }