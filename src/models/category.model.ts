import { Document, Model, model, Schema } from "mongoose";


export class CategoryDocument extends Document {
    nameVn: String;
    nameEn: String
}

const schema = new Schema({
    nameVn: { type: String, required: true, unique: true },
    nameEn: { type: String, required: true, unique: true },
})

export const create = async (nameVn: String, nameEn: String) => {
    await Category.create({ nameVn, nameEn });
}

export const findAll = async() =>{
    return await Category.find();
}

export const findByNameEn = async(nameEn: String) =>{
    return await Category.findOne({nameEn: nameEn});
}

const Category: Model<CategoryDocument> = model<CategoryDocument, Model<CategoryDocument>>('Category', schema);

export default Category;