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

// parse incoming request with body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// route racine
app.get("/", (req, res) => {
    res.json({message: "Itrut CRUD events gestion"});
});

// Launch server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
