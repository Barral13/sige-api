import * as departmentService from "../services/departmentService.js";

export async function createDepartment(req, res) {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ error: "O campo 'nome' é obrigatório." });
        }

        const department = await departmentService.createDepartment({ name });
        return res.status(201).json(department);
    } catch (error) {
        return res.status(500).json({ error: "Erro ao criar departamento.", details: error.message });
    }
}
