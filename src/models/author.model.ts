import { Document, model, Model, Schema } from "mongoose";

export class AuthorDocument extends Document {
    name: String;
    dateOfBirth: Date;
    country: String;
    gender: String
}

const schema = new Schema({
    name: String,
    dateOfBirth: Date,
    country: String,
    gender: {
        type: String,
        default: "Not specified",
        enum: { values: ["Male", "Female", "Transgender", "non-binary", "Not specified"] }
    }

});

export const create = async (name: String, dateOfBirth: Date, country: String, gender: any) => {
    await Author.create({ name, dateOfBirth, country, gender });
}

export const findAll = async () => {
    return await Author.find();
}

export const findByName = async (name: String) => {
    return await Author.findOne({ name: name });
}


const Author: Model<AuthorDocument> = model<AuthorDocument, Model<AuthorDocument>>('Author', schema)

export default Author;