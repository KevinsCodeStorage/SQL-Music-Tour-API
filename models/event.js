"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate({ Stage, StageEvents, MeetGreet, Settime }) {
      // stages
      Event.belongsToMany(Stage, {
        foreignKey: "event_id",
        as: "stages",
        through: StageEvents,
      });

      // meet and greets
      Event.hasMany(MeetGreet, {
        foreignKey: "event_id",
        as: "meet_greets",
      });

      // set times
      Event.hasMany(Settime, {
        foreignKey: "event_id",
        as: "set_times",
      });
    }
  }
  Event.init(
    {
      event_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      date: DataTypes.DATE,
      start_time: DataTypes.DATE,
      end_time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Event",
    }
  );
  return Event;
};
