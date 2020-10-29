import { RequestHandler, Request, Response } from 'express';
import AuthorService from "../../services/author-service"

const create: RequestHandler = async (req: Request, res: Response, next) => {
    try {
        res.send(await AuthorService.createAuthor(req.body.name, req.body.dateOfBirth, req.body.country, req.body.gender, req.body.pseudonyms))
    }
    catch (e) {
        res.status(500).send({
            message: "error occured"
        });
    }
};

export default create;
