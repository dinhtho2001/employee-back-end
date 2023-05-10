import { Router } from "express";
import EmployeeController from "../controllers/employeeController.js";
const router = Router();

const employeeController = new EmployeeController();
// Get all employees
router.get("/", employeeController.getAllEmployees);

// Get employee by ID
router.get("/:id", employeeController.getEmployeeById);

// Add new employee
router.post("/", employeeController.addEmployee);

// Update employee by ID
router.put("/:id", employeeController.updateEmployee);

// Delete employee by ID
router.delete("/:id", employeeController.deleteEmployee);

export default router;
