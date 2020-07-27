// Imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// PORT
const PORT = process.env.PORT || 3000;

const app = express();

// cors middleware config
var corsOptions = {
    origin: `http://localhost:${PORT}`,
    optionsSucessStatus: 200
};

app.use(cors(corsOptions));

// Body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// route racine
app.get("/", (req, res) => {
    res.json({message: "Itrut CRUD events gestion"});
});

const db = require("./models");
db.sequelize.sync();

// Launch server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
