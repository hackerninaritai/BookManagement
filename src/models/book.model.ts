

import { Document, model, Model, Schema } from "mongoose";
import Author, { AuthorDocument } from "./author.model";
import Category, { CategoryDocument } from "./category.model";

export class BookDocument extends Document {
    name: String;
    nameEn: String;
    price: Number;
    categories: Array<CategoryDocument>
    authors: Array<AuthorDocument>;
}

const schema = new Schema({
    name: {
        type: String,
        require: [true, "A book's name is required"],
    },
    nameEn: String,
    price: Number,
    categories: [{ type: Category, default: [] }],
    authors: [{ type: Author, default: [] }],

});

const Book: Model<BookDocument> = model<BookDocument, Model<BookDocument>>('Book', schema);

export const findAll = async () => {
    return await Book.find();
}

export default Book;