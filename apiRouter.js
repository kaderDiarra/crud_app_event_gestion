// Imports
var app = require("express");
var userCtrl = require("./controllers/userCtrl");

// Router
exports.router = (() => {
    var apiRouter = app.Router();

    // Users routes
    apiRouter.route("/user/register/").post(userCtrl.register);
    apiRouter.route("/user/login/").post(userCtrl.login);

    return apiRouter;
})();