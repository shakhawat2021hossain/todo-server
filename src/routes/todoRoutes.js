const express = require('express');
const router = express.Router();

const { todoList, addTodo } = require('../controllers/todoController');

const verifyToken = require('../middleware/authMiddleware')

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Get all to-dos
 *     responses:
 *       200:
 *         description: A list of to-dos
 */
router.get('/', verifyToken, todoList);

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Add a new to-do
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               task:
 *                 type: string
 *     responses:
 *       201:
 *         description: To-do added successfully
 */
router.post('/', verifyToken, addTodo);

module.exports = router;
