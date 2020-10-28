import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { DB_ACCOUNT, DB_PASSWORD, DB_CLUSTER, DB_NAME } from "./configs/db.config";
import routes from './routes';

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

mongoose.connect(`mongodb+srv://${DB_ACCOUNT}:${DB_PASSWORD}@${DB_CLUSTER}/${DB_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log("connected to the database!")).catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
})

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});