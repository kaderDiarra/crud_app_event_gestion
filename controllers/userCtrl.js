// Import
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var models = require("../models");

// Routes
module.exports = {
    register: (req, res) => {
        // Parameters
        var username = req.body.username;
        var email = req.body.email;
        var password = req.body.password;

        if (username == null || email == null || password == null) {
            return res.status(400).json({"error": "Il manque des paramètres"});
        }

        // TODO verify pseudo length, mail, password ...
        models.User.findOne({
            attributes: ['email'],
            where: {email: email}
        })
        .then((userFound) => {
            if (!userFound) {
                // create user
            } else {
                return res.status(409).json({"error": "Compte déjà existant"});
            }
        })
        .catch((err) => {
            return res.status(500).json({"error": "Authentification impossible"});
        });
    },
    login: (req, res) => {
        // TODO: To implement
    }
}