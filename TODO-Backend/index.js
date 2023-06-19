const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const mainRouter = require("./routes");
const mongoose = require("./utils/db_config");
const cors = require("cors");

const {sendErrorMessage} = require("./utils/sendFormattedResponses");

const app = express();

app.use(express.json());
app.use(cors())

/**
 * Importing Main Router
 */
app.use(mainRouter)
app.use('/', (req, res) => {
    sendErrorMessage(res, "URL " + req.url + " Not found")
})

const port = process.env.PORT || 3000;

/**
 * Starting up Server
 */
app.listen(port, () => {
    console.log("Server is running at :" + port);

    mongoose.then((data) => {
        console.log("DB is connected");
    })
})
