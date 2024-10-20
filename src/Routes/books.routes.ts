import express from "express";
import BookController from '../Controllers/books.controller';

const router = express.Router();

router.get('/books', BookController.getBooks);
router.post('/books', BookController.createBook);
router.put('/books/:id', BookController.updateBook);
router.delete('/books/:id', BookController.deleteBook);

export default router;
