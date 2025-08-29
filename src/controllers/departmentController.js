import { DepartmentService } from "../services/departmentService.js";

const departmentService = new DepartmentService();

export class DepartmentController {
    async createDepartment(req, res) {
        try {
            const { name } = req.body;
            const department = await departmentService.createDepartment({ name });
            return res.status(201).json(department);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async getAllDepartments(req, res) {
        try {
            const departments = await departmentService.getAllDepartments();
            return res.status(200).json(departments);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getDepartmentById(req, res) {
        try {
            const { id } = req.params;
            const department = await departmentService.getDepartmentById(Number(id));
            if (!department) {
                return res.status(404).json({ error: "Departamento não encontrado." });
            }
            return res.status(200).json(department);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async updateDepartment(req, res) {
        try {
            const { id } = req.params;
            const { name } = req.body;
            const updated = await departmentService.updateDepartment(Number(id), { name });
            return res.status(200).json(updated);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async deleteDepartment(req, res) {
        try {
            const { id } = req.params;
            const deleted = await departmentService.deleteDepartment(Number(id));
            return res.status(200).json(deleted);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}
