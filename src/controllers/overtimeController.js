import Overtime from "../models/overtime.js";

class overtimeController {
  // Get all overtime
  getAllOvertime = async (req, res) => {
    try {
      const overtime = await Overtime.findAll();
      res.json(overtime);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  };

  // Add new overtime record
  addOvertime = async (req, res) => {
    const { employeeId, date, hoursWorked } = req.body;
    try {
      const newOvertime = await Overtime.create({
        employeeId,
        date,
        hoursWorked,
      });
      res.status(201).json(newOvertime);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  };
}
export default overtimeController;
