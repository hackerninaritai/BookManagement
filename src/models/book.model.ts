

import { Document, model, Model, Schema } from "mongoose";
import { AuthorDocument } from "./author.model";
import { CategoryDocument } from "./category.model";

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
    categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    authors: [{ type: Schema.Types.ObjectId, ref: "Author" }],

});

const Book: Model<BookDocument> = model<BookDocument, Model<BookDocument>>('Book', schema);

export const findAll = async () => {
    return await Book.find().populate("authors");
}

export const createBook = async (book: BookDocument[]): Promise<BookDocument[]> => {
    try {
        console.log(`Dao: ${book[0].name}`)
        return Book.create(book)
    }
    catch (e) {
        console.log(e)
    }
};

export default Book;