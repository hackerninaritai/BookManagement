# BookManagement
NodeJs ExpressJs TypeScript Mongoose ODM mapping CRUD Example

# To create the project:
- Create a repository on github
- Clone it to the local workspace
- Install dependencies using: npm install <dependencyName>... --save
    - Dependencies used in this project:
        - mongoose
        - expressJs (express)
        - cors
        - body-parser
        - typescript

# To use typescipt:
- Install dependency: npm install typescript --save-dev
- Initialize typescript:
    - To create tsconfig.json file: npx tsc --init
    - Change propeties in this file as you want
- Use: npx tsc to transpile the ts files to js files

# To connect to MongoDb server:
- [Optional] Create a seperate file containing the details of the connection.
- Use mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    - useNewUrlParser:
    - useUnifiedTopology: