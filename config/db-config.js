module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "{Kader_database01;}",
    DB: "test_db_crud",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        //acquire: 30000,
        idle: 10000
    }
};

