import { RequestHandler, Request, Response } from 'express';
import Book, { BookDocument } from '../../models/book.model';

const save: RequestHandler = async (req: Request, res: Response, next) => {
    try {
        const book = new Book(req.body);
        console.log(`controller: ${book.name}`);
        res.send(await book.save());
    }
    catch (e) {
        console.log(e),
            res.status(500).send({
                message: e['name'],
            });
    }
};

export default save;
