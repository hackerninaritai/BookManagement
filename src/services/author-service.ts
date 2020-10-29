import { create, findAll, findByName } from "../models/author.model"
class AuthorService {

    public async createAuthor(name: String, dateOfBirth: Date, country: String, gender: any, pseudonyms: any) {
        return await create(name, dateOfBirth, country, gender, pseudonyms);
    }

    public async find(name: any) {
        if (name) {
            return await findByName(name)
        }
        return findAll()
    }

}
export = new AuthorService();