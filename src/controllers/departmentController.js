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

export async function getAllDepartments(req, res) {
    try {
        const departments = await departmentService.getAllDepartments();
        return res.status(200).json(departments);
    } catch (error) {
        return res.status(500).json({ error: "Erro ao buscar departamentos.", details: error.message });
    }
}

export async function getDepartmentById(req, res) {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ error: "O parâmetro 'id' é obrigatório." });
        }

        const department = await departmentService.getDepartmentById(Number(id));
        if (!department) {
            return res.status(404).json({ error: "Departamento não encontrado." });
        }

        return res.status(200).json(department);
    } catch (error) {
        return res.status(500).json({ error: "Erro ao buscar departamento.", details: error.message });
    }
}

export async function updateDepartment(req, res) {
    try {
        const { id } = req.params;
        const { name } = req.body;

        if (!id) {
            return res.status(400).json({ error: "O parâmetro 'id' é obrigatório." });
        }

        if (!name) {
            return res.status(400).json({ error: "O campo 'nome' é obrigatório." });
        }

        const updatedDepartment = await departmentService.updateDepartment(Number(id), { name });

        return res.status(200).json(updatedDepartment);
    } catch (error) {
        if (error.code === 'P2025') { // Prisma not found error
            return res.status(404).json({ error: "Departamento não encontrado." });
        }
        return res.status(500).json({ error: "Erro ao atualizar departamento.", details: error.message });
    }
}

export async function deleteDepartment(req, res) {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ error: "O parâmetro 'id' é obrigatório." });
        }

        await departmentService.deleteDepartment(Number(id));
        return res.status(200).json({ message: "Departamento deletado com sucesso." });
    } catch (error) {
        if (error.code === 'P2025') { // Prisma not found error
            return res.status(404).json({ error: "Departamento não encontrado." });
        }
        return res.status(500).json({ error: "Erro ao deletar departamento.", details: error.message });
    }
}



