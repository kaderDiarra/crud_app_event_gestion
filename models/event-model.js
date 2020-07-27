module.exports = (sequelize, Sequelize) => {
  const Event = sequelize.define("event", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    /*idUSERS: {
      allowNull: false,
      type: Sequelize.INTEGER,
      /*references: {
        model: 'Users',
        key: 'id'
      }*//*
    },*/
    title: {
      allowNull: false,
      type: Sequelize.STRING
    },
    begin: {
      allowNull: false,
      type: Sequelize.DATE
    },
    end: {
      allowNull: true,
      type: Sequelize.DATE
    },
    status: {
      allowNull: true,
      defaultValue: 0,
      type: Sequelize.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
  
  return Event;
};