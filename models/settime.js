'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Settime extends Model {
    static associate({ Band, Event, Stage }) {
      // band
      Settime.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })

      // event
      Settime.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })

      // stage 
      Settime.belongsTo(Stage, {
        foreignKey: "stage_id",
        as: "stage"
      })
    }
  }
  Settime.init({
    set_time_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER,
    stage_id: DataTypes.INTEGER,
    band_id: DataTypes.INTEGER,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Settime',
  });
  return Settime;
};