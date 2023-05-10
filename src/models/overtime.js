import { INTEGER, DATE, FLOAT  } from "sequelize";
import { sequelize } from "../config/database.js";
import Employee from "./employee.js";

const Overtime = sequelize.define("Overtimes", {
  employeeId: {
    type: INTEGER,
    allowNull: false,
  },
  date: {
    type: DATE,
    allowNull: false,
  },
  hoursWorked: {
    type: FLOAT,
    allowNull: false,
  },
});

Overtime.belongsTo(Employee, { foreignKey: "employeeId" });

export default Overtime;
