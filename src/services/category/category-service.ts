import { Request } from 'express';
import Category, { CategoryDocument, create, findAll, findByNameEn } from "../../models/category.model"

class CategoryService {
    public async createCategory(nameVn: String, nameEn: String) {
        await create(nameVn, nameEn)
    }

    public async findAll() {
        return await findAll()
    }

    public async findByNameEn(nameEn: String) {
        return await findByNameEn(nameEn)
    }

}

export = new CategoryService();