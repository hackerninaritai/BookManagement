import { RequestHandler, Request, Response } from "express"
import CategoryService from "../../services/category-service"

const find: RequestHandler = async (req: Request, res: Response) => {
    try {
        const nameEn: any = req.query["nameEn"];
        res.send(await CategoryService.find(nameEn));
    }
    catch (e) {
        res.status(500).send({
            message: "error occured"
        });
    }
}

export default find
