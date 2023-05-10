import Employee from "../models/employee.js";

class employeeController {
  // Get all employees
  async getAllEmployees(req, res) {
    try {
      const employees = await Employee.findAll();
      res.json(employees);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  }

  // Get employee by ID
  async getEmployeeById(req, res) {
    const { id } = req.params;
    try {
      const employee = await Employee.findByPk(id);
      if (!employee) {
        return res.status(404).json({ error: "Employee not found" });
      }
      res.json(employee);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  }

  // Add new employee
  async addEmployee(req, res) {
    const { name, title, type, salary } = req.body;
    try {
      const newEmployee = await Employee.create({ name, title, type, salary });
      res.status(201).json(newEmployee);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  }

  // Update employee
  async updateEmployee(req, res) {
    const { id } = req.params;
    const { name, title, type, salary } = req.body;
    try {
      const employee = await Employee.findByPk(id);
      if (!employee) {
        return res.status(404).json({ error: "Employee not found" });
      }
      employee.name = name;
      employee.title = title;
      employee.type = type;
      employee.salary = salary;
      await employee.save();
      res.json(employee);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  }

  // Delete employee
  async deleteEmployee(req, res) {
    const { id } = req.params;
    try {
      const employee = await Employee.findByPk(id);
      if (!employee) {
        return res.status(404).json({ error: "Employee not found" });
      }
      await employee.destroy();
      res.sendStatus(204);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  }
}

export default employeeController;
