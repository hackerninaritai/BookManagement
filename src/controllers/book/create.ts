import { RequestHandler, Request, Response } from 'express';
import Book, { BookDocument } from '../../models/book.model';
import BookService from "../../services/book-service"

const create: RequestHandler = async (req: Request, res: Response, next) => {
    console.log(`controller: ${req.body.books}`);
    try {
        const bookDocs: BookDocument[] = req.body.books;

        console.log(`controller: ${bookDocs[0].name}`);
        res.send(await BookService.create(bookDocs));
    }
    catch (e) {
        res.status(500).send({
            message: e
        });
    }
};

export default create;
