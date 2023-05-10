import OvertimeController from "../controllers/overtimeController.js";
import { Router } from "express";
const router = Router();
const overtimeController = new OvertimeController();

// Get all overtime records
router.get("/", overtimeController.getAllOvertime);

// Add new overtime record
router.post("/", overtimeController.addOvertime);

export default router;
