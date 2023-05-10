import Salary from "../models/salary.js";
import Employee from "../models/employee.js";

class directorController {
  // Get salary information of all employees for a specific month
  async getSalaryOfAllEmployeesByMonth(req, res) {
    const { month } = req.params;
    try {
      const salaries = await Salary.findAll({
        where: { month },
        include: [Employee],
      });
      res.json(salaries);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  }

  // Get salary information of the employee with the highest salary
  async getEmployeeWithHighestSalary(req, res) {
    try {
      const highestSalary = await Salary.findOne({
        order: [["salary", "DESC"]],
        include: [Employee],
      });
      res.json(highestSalary);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  }
}

export default directorController;
