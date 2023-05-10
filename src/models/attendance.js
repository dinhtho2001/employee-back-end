import { INTEGER, FLOAT, DATE } from "sequelize";
import { sequelize } from "../config/database.js";
import Employee from "./employee.js";

const Attendance = sequelize.define("Attendances", {
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

Attendance.belongsTo(Employee, { foreignKey: "employeeId" });

export default Attendance;
