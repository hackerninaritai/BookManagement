import { RequestHandler, Request, Response } from "express"
import CategoryService from "../../services/category/category-service"

export const findAll: RequestHandler = async (req: Request, res: Response) => {
    try {
        res.send(await CategoryService.findAll());
    }
    catch (e) {
        res.status(500).send({
            message: "error occured"
        });
    }
}

export const findByNameEn: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log("query: " + req.query["nameEn"])
        const nameEn: any = req.query["nameEn"];
        res.send(await CategoryService.findByNameEn(nameEn));
    }
    catch (e) {
        res.status(500).send({
            message: "error occured"
        });
    }
}