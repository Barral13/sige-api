import express from "express";
import { createDepartment, deleteDepartment, getAllDepartments, getDepartmentById, updateDepartment } from "../controllers/departmentController.js";

const router = express.Router();

router.post("/create", createDepartment);
router.get("/list", getAllDepartments);
router.get("/list/:id", getDepartmentById);
router.put("/update/:id", updateDepartment);
router.delete("/delete/:id", deleteDepartment);

export default router;
