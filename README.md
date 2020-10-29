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

# To persist an object, we can use create or save:
    - The .save() is an instance method of the model.
    - The create() is a static method of the model. It takse an object as the first parameter.

    var mongoose = require('mongoose');

    var notificationSchema = mongoose.Schema({
    
    });

    var Notification = mongoose.model('Notification', notificationsSchema);


    function saveNotification1(data) {
        var notification = new Notification(data);
        notification.save(function (err) {
            if (err) return handleError(err);
            // saved!
        })
    }

    function saveNotification2(data) {
        Notification.create(data, function (err, small) {
        if (err) return handleError(err);
        // saved!
        })
    }
# M