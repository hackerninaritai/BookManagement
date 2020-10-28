import { RequestHandler, Request, Response } from "express"
import BookService from "../../services/book-service"

const find: RequestHandler = async (req: Request, res: Response) => {
    console.log("book find!")
    try {
        res.send(await BookService.find());
    }
    catch (e) {
        res.status(500).send({
            message: "error occured"
        });
    }
}

export default find
