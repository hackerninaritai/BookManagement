import { create, findAll, findByName } from "../models/author.model"
class AuthorService {

    public async createAuthor(name: String, dateOfBirth: Date, country: String, gender: any) {
        return await create(name, dateOfBirth, country, gender);
    }

    public async find(name: any) {
        if (name) {
            return await findByName(name)
        }
        return findAll()
    }

}
export = new AuthorService();