import prisma from "../prisma/PrismaClient.js";

export class DepartmentService {
    async createDepartment({ name }) {
        if (!name) {
            throw new Error("O campo 'name' é obrigatório.");
        }
        return await prisma.department.create({
            data: { name },
            select: {
                id: true,
                name: true,
                createdAt: true,
                updatedAt: true
            }
        });
    }

    async getAllDepartments() {
        return await prisma.department.findMany({
            select: {
                id: true,
                name: true,
                createdAt: true,
                updatedAt: true
                // positions removido
            }
        });
    }

    async getDepartmentById(id) {
        if (!id) {
            throw new Error("O parâmetro 'id' é obrigatório.");
        }
        return await prisma.department.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                createdAt: true,
                updatedAt: true
                // positions removido
            }
        });
    }

    async updateDepartment(id, { name }) {
        if (!id) {
            throw new Error("O parâmetro 'id' é obrigatório.");
        }
        const data = {};
        if (name !== undefined) data.name = name;

        return await prisma.department.update({
            where: { id },
            data,
            select: {
                id: true,
                name: true,
                createdAt: true,
                updatedAt: true
            }
        });
    }

    async deleteDepartment(id) {
        if (!id) {
            throw new Error("O parâmetro 'id' é obrigatório.");
        }
        return await prisma.department.delete({
            where: { id },
            select: {
                id: true,
                name: true
            }
        });
    }
}
