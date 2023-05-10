import Attendance from "../models/attendance.js";

class attendanceController {
  // Get all attendance records
  getAllAttendance = async (req, res) => {
    try {
      const attendance = await Attendance.findAll();
      res.json(attendance);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  };

  // Add new attendance record
  addAttendance = async (req, res) => {
    const { employeeId, date, hoursWorked } = req.body;
    try {
      const newAttendance = await Attendance.create({
        employeeId,
        date,
        hoursWorked,
      });
      res.status(201).json(newAttendance);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  };
}

export default attendanceController;
