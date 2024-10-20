import { Request, Response } from 'express';
import Book from '../Modals/books';
import BookService from '../Services/books.service';
import BookSchema from '../Modals/books';

class BookController {
    getBooks(req: Request, res: Response) {
        const error = BookSchema.validate(req.query).catch((err) => {
            res.status(400).json({ error: error });
        }).then((data) => {
            BookService.getBooks().then((data) => {
                res.status(200).json({ data: data });
            });
        });
    }

    createBook(req: Request, res: Response) {
        const error = BookSchema.validate(req.body).catch((err) => {
            res.status(400).json({ error: error });
        }).then((data) => {
            BookService.createBook(data).then((data) => {
                res.status(200).json({ data: data });
            });
        });
    }

    updateBook(req: Request, res: Response) {
        const error = BookSchema.validate(req.body).catch((err) => {
            res.status(400).json({ error: error });
        }).then((data) => {
            BookService.updateBook(req.params.id, data).then((data) => {
                res.status(200).json({ data: data });
            });
        });
    }

    deleteBook(req: Request, res: Response) {
        const error = BookSchema.validate(req.body).catch((err) => {
            res.status(400).json({ error: error });
        }).then((data) => {
            BookService.deleteBook(req.params.id).then((data) => {
                res.status(200).json({ data: data });
            });
        });
    }
}

export default new BookController();
