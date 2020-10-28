import { RequestHandler, Request, Response } from "express"
import AuthorService from "../../services/author-service"

const find: RequestHandler = async (req: Request, res: Response) => {
    try {
        const name: any = req.query["name"];
        res.send(await AuthorService.find(name));
    }
    catch (e) {
        res.status(500).send({
            message: "error occured"
        });
    }
}

export default find
