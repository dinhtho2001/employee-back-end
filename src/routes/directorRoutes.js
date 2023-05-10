import { Router } from "express";
import DirectorController from "../controllers/directorController.js";

const router = Router();
const directorController = new DirectorController();

// Get salary information of all employees for a specific month
router.get(
  "/salary/month/:month",
  directorController.getSalaryOfAllEmployeesByMonth
);

// Get salary information of the employee with the highest salary
router.get("/salary/highest", directorController.getEmployeeWithHighestSalary);

export default router;
