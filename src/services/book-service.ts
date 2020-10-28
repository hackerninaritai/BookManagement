import { findAll } from "../models/book.model"

class BookService {
    public async find() {
        return await findAll();
    }

}

export = new BookService();