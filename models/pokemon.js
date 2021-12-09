'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pokemon.init({

    name: DataTypes.STRING,
    hp: DataTypes.STRING,
    type: DataTypes.STRING,
    secondary_cost: DataTypes.STRING,
    first_power: DataTypes.STRING,
    first_damage: DataTypes.INTEGER,
    second_power: DataTypes.STRING,
    second_damage: DataTypes.INTEGER,
    weakness: DataTypes.STRING,
    resistance: DataTypes.STRING,
    retreat_cost: DataTypes.STRING,
    image: DataTypes.STRING,
    card_color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pokemon',
    tableName: 'pokemon',
    timestamps: false
  });
  return Pokemon;
};