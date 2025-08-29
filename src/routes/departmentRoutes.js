import { Router } from "express";
import { DepartmentController } from "../controllers/departmentController.js";

const router = Router();
const departmentController = new DepartmentController();

router.post("/create", (req, res) => departmentController.createDepartment(req, res));
router.get("/list", (req, res) => departmentController.getAllDepartments(req, res));
router.get("/list/:id", (req, res) => departmentController.getDepartmentById(req, res));
router.put("/update/:id", (req, res) => departmentController.updateDepartment(req, res));
router.delete("/delete/:id", (req, res) => departmentController.deleteDepartment(req, res));

export default router;
