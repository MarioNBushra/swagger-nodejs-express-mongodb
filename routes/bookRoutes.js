const express = require("express");
const booksController = require("../controllers/booksController");
const router = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - bookName
 *         - bookPrice
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         bookName:
 *           type: string
 *           description: The book title
 *         bookPrice:
 *           type: number
 *           description: The book price
 *         bookDescription:
 *           type: string
 *           description: the book description
 *         bookAuthor:
 *           type: string
 *           description: the book author
 *       example:
 *         id: d5fE_asz
 *         bookName: The New Turing Omnibus
 *         bookPrice: 39.99
 *         bookDescription: this is book about science
 *         bookAuthor: Mario Nathan
 */

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: The books managing API
 */

/**
 * @swagger
 * /api/book/search:
 *   post:
 *     summary: Returns the list of all the books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */

router.post("/search", booksController.searchBooks);

/**
 * @swagger
 * /api/book/search/one/{id}:
 *   post:
 *     summary: Get the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     responses:
 *       200:
 *         description: The book description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: The book was not found
 */

router.post("/search/one/:id", booksController.searchOneBook);

/**
 * @swagger
 * /api/book/{id}:
 *  patch:
 *    summary: Update the book by the id
 *    tags: [Books]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The book id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Book'
 *    responses:
 *      200:
 *        description: The book was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Book'
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 */

router.patch("/:id", booksController.editBook);

/**
 * @swagger
 * /api/book/{id}:
 *   delete:
 *     summary: delete the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     responses:
 *       200:
 *         description: The book description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: The book was not found
 */

router.delete("/:id", booksController.deleteBook);

/**
 * @swagger
 * /api/book/create:
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 */
router.post("/create", booksController.addBook);
module.exports = router;
