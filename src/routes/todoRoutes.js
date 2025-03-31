const express = require('express');
const router = express.Router();

const { todoList, addTodo } = require('../controllers/todoController');

// /**
//  * @swagger
//  * /todos:
//  *   get:
//  *     summary: Get all to-dos
//  *     responses:
//  *       200:
//  *         description: A list of to-dos
//  */
router.get('/', todoList);

// /**
//  * @swagger
//  * /todos:
//  *   post:
//  *     summary: Add a new to-do
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               task:
//  *                 type: string
//  *     responses:
//  *       201:
//  *         description: To-do added successfully
//  */
router.post('/', addTodo);

// /**
//  * @swagger
//  * /todos/{id}:
//  *   delete:
//  *     summary: Delete a to-do
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: To-do ID to delete
//  *         schema:
//  *           type: string
//  *     responses:
//  *       204:
//  *         description: To-do deleted
//  */
// router.delete('/:id', deleteTodo);

// /**
//  * @swagger
//  * /todos/{id}:
//  *   put:
//  *     summary: Update a to-do
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: To-do ID to update
//  *         schema:
//  *           type: string
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               task:
//  *                 type: string
//  *     responses:
//  *       200:
//  *         description: To-do updated successfully
//  */
// router.put('/:id', updateTodo);

// /**
//  * @swagger
//  * /todos/{id}:
//  *   get:
//  *     summary: Get a specific to-do
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: To-do ID to fetch
//  *         schema:
//  *           type: string
//  *     responses:
//  *       200:
//  *         description: A specific to-do
//  */
// router.get('/:id', getATodo);

module.exports = router;
