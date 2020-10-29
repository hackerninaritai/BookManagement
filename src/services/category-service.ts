import { create, findAll, findByNameEn, findOneByIdAndUpdate } from "../models/category.model"

class CategoryService {
    public async createCategory(nameVn: String, nameEn: String) {
        await create(nameVn, nameEn)
    }

    public async find(nameEn: any) {
        if (nameEn)
            return await findByNameEn(nameEn);
        return await findAll();
    }

    public async findOneByIdAndUpdate(data: Object){
        return await findOneByIdAndUpdate(data);
    }
}

export = new CategoryService();