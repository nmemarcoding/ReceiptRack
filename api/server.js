// express server on port 3001 with mongoose connection to mongodb
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


require('dotenv').config();

const app = express();

// use cors
app.use(cors());

// use body-parser
app.use(bodyParser.json());

// connect to mongodb
mongoose
    .connect("mongodb+srv://nmemarcoding:Nima1377@cluster0.ush4sna.mongodb.net/")
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log(err);
})




// use routes


const port = process.env.PORT || 3002;

// start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});