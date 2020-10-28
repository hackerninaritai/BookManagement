import { RequestHandler, Request, Response } from 'express';
//import { CategoryDocument } from '../../models/category.model';
import CategoryService from "../../services/category/category-service"

const create: RequestHandler = async (req: Request, res: Response, next) => {
    try {
        res.send(await CategoryService.createCategory(req.body.nameVn, req.body.nameEn))
    }
    catch (e) {
        res.status(500).send({
            message: "error occured"
        });
    }
};

export default create;
