import { STRING, INTEGER, FLOAT } from "sequelize";
import { sequelize } from "../config/database.js";
import Employee from "./employee.js";

const Salary = sequelize.define("Salaries", {
  employeeId: {
    type: INTEGER,
    allowNull: false,
  },
  month: {
    type: STRING,
    allowNull: false,
  },
  salary: {
    type: FLOAT,
    allowNull: false,
  },
});

Salary.belongsTo(Employee, { foreignKey: "employeeId" });

export default Salary;
