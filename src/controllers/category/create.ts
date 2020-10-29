import { RequestHandler, Request, Response } from 'express';
import CategoryService from "../../services/category-service"

const create: RequestHandler = async (req: Request, res: Response, next) => {
    try {
        res.send(await CategoryService.createCategory(req.body.nameVn, req.body.nameEn))
    }
    catch (e) {
        console.log(e);
        res.status(500).send({
            message: "error occured"
        });
    }
};

export default create;
