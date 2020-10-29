import { Request, RequestHandler, Response } from "express";
import CategoryService from "../../services/category-service"

const update: RequestHandler = async (req: Request, res: Response, next) => {
    try {
        console.log(req.body);
        
        res.send(await CategoryService.findOneByIdAndUpdate(req.body));
    }
    catch (e) {
        res.status(500).send({
            "message": "internalError occured"
        })
        next(e);
    }
}

export default update;