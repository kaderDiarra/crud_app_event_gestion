const db_config = require("../config/db-config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
                        db_config.DB,
                        db_config.USER,
                        db_config.PASSWORD,
                        {
                          host: db_config.HOST,
                          dialect: db_config.dialect,
                          //operatorsAliases: false,

                          pool: {
                            max: db_config.pool.max,
                            min: db_config.pool.min,
                            acquire: db_config.pool.acquire,
                            idle: db_config.pool.idle
                          }
                        });


// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models/tables
db.event = require("./event-model.js") (sequelize, Sequelize);
db.user = require("./user-model.js") (sequelize, Sequelize);

//Relation between models
db.user.hasMany(db.event);

module.exports = db;
