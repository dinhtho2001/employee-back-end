import SalaryController from "../controllers/salaryController.js";
import { Router } from "express";
const router = Router();
const salaryController = new SalaryController();

// Get employee salary for a specific month
router.get("/month/:month", salaryController.getEmployeeSalaryByMonth);

// Calculate and update employee salaries for a specific month
router.post("/calculate/:month", salaryController.calculateAndUpdateSalaries);

export default router;
