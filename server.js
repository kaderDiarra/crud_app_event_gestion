// Imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Configuration du CORS
var corsOptions = {
    origin: "http://localhost:8081",
    optionsSucessStatus: 200
};

app.use(cors(corsOptions));

