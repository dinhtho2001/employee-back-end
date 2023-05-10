import Salary from "../models/salary.js";
import Employee from "../models/employee.js";

class salaryController {
  // Get employee salary for a specific month
  getEmployeeSalaryByMonth = async (req, res) => {
    const { month } = req.params;
    try {
      const salaries = await Salary.findAll({ where: { month } });
      res.json(salaries);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  };

  // Calculate and update employee salaries for a specific month
  calculateAndUpdateSalaries = async (req, res) => {
    const { month } = req.params;
    try {
      const employees = await Employee.findAll();
      for (const employee of employees) {
        const salary = calculateSalary(employee.type, employee.salary);
        await Salary.create({ employeeId: employee.id, month, salary });
      }
      res.sendStatus(204);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  };

  // Helper function to calculate salary based on employee type and base salary
  calculateSalary = (type, baseSalary) => {
    let salary = baseSalary;
    if (type === "engineer") {
      salary += 800000;
    } else if (type === "accountant") {
      salary += 500000;
    }
    return salary;
  };
}
export default salaryController;
