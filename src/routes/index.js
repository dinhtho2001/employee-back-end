import { Router } from "express";
import authRoute from "./auth.route.js";
import employeeRoutes from "./employeeRoutes.js";
import attendanceRoutes from "./attendanceRoutes.js";
import overtimeRoutes from "./overtimeRoutes.js";
import salaryRoutes from "./salaryRoutes.js";
import directorRoutes from "./directorRoutes.js";

const router = Router();

router.use("/auth", authRoute);
router.use("/employees", employeeRoutes);
router.use("/attendance", attendanceRoutes);
router.use("/overtime", overtimeRoutes);
router.use("/salary", salaryRoutes);
router.use("/director", directorRoutes);

export default router;
