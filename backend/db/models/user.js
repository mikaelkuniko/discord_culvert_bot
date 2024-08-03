'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
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
    user: DataTypes.STRING,
    score: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};