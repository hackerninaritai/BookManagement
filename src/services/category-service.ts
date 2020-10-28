import { create, findAll, findByNameEn } from "../models/category.model"

class CategoryService {
    public async createCategory(nameVn: String, nameEn: String) {
        await create(nameVn, nameEn)
    }

    public async find(nameEn: any) {
        if (nameEn)
            return await findByNameEn(nameEn);
        return await findAll();
    }

}

export = new CategoryService();