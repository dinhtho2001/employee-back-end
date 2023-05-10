import { INTEGER, STRING, FLOAT } from "sequelize";
import { sequelize } from "../config/database.js";

const Employee = sequelize.define("Employees", {
  id: {
    type: INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },

  name: {
    type: STRING,
    allowNull: false,
  },
  title: {
    type: STRING,
    allowNull: false,
  },
  type: {
    type: STRING,
    allowNull: false,
  },
  salary: {
    type: FLOAT,
    allowNull: false,
  },
});

export default Employee;
