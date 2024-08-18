'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    toSafeObject() {
      const { id, username, email } = this; // context will be the User instance
      return { id, username, email };
    }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static getCurrentUserById(id) {
      return User.scope("currentUser").findByPk(id);
    }

    static associate(models) {
      // define association here
    }
  }
  User.init({
    user: {
      type: DataTypes.STRING,
      allowNull: false
  },
    score: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        len: [1, 200]
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};