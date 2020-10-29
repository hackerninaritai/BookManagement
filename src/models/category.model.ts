import { Document, Model, model, Schema } from "mongoose";


export class CategoryDocument extends Document {
    nameVn: String;
    nameEn: String
}

export const schema = new Schema({
    nameVn: { type: String, required: true, unique: true },
    nameEn: { type: String, required: true, unique: true },
})

export const create = async (nameVn: String, nameEn: String) => {
    await Category.create({ nameVn, nameEn });
}

export const findAll = async () => {
    return await Category.find();
}

export const findByNameEn = async (nameEn: String) => {
    return await Category.findOne({ nameEn: nameEn });
}

export const findOneByIdAndUpdate = async (data: Object): Promise<void> => {
    const category = new Category(data);
    console.log(category.id)
    await Category.updateOne({ _id: category.id }, category, (e) => {
        console.log("e: " + e);
    })
};

const Category: Model<CategoryDocument> = model<CategoryDocument, Model<CategoryDocument>>('Category', schema);

export default Category;