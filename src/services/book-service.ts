import Book, { BookDocument, createBook, findAll } from "../models/book.model";

class BookService {
    public async find() {
        return await findAll();
    }

    public async create(books: BookDocument[]) {
        console.log(`services: ${books[0].name}`);
        return await createBook(books);
    }

}

export = new BookService();