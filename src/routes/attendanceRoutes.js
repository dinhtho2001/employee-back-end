import { Router } from "express";
import AttendanceController from "../controllers/attendanceController.js";

const router = Router();
const attendanceController = new AttendanceController();
// Get all attendance records
router.get("/", attendanceController.getAllAttendance);

// Add new attendance record
router.post("/", attendanceController.addAttendance);

export default router;
