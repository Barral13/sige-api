import prisma from "../prisma/PrismaClient.js";

export class PositionService {
    async createPosition({ name, departmentId }) {
        if (!name || !departmentId) {
            throw new Error("Os campos 'name' e 'departmentId' são obrigatórios.");
        }

        return await prisma.position.create({
            data: {
                name,
                departmentId
            },
            select: {
                id: true,
                name: true,
                departmentId: true,
                createdAt: true,      
                updatedAt: true,      
                department: {
                    select: {
                        id: true,
                        name: true     
                    }
                }
            }
        });
    }

    async getAllPositions() {
        return await prisma.position.findMany({
            select: {
                id: true,
                name: true,
                departmentId: true,
                createdAt: true,
                updatedAt: true,
                department: {
                    select: {
                        id: true,
                        name: true      
                    }
                }
            }
        });
    }

    async getPositionById(id) {
        if (!id) {
            throw new Error("O parâmetro 'id' é obrigatório.");
        }

        return await prisma.position.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                departmentId: true,
                createdAt: true,
                updatedAt: true,
                department: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });
    }

    async updatePosition(id, { name, departmentId }) {
        if (!id) {
            throw new Error("O parâmetro 'id' é obrigatório.");
        }

        const data = {};
        if (name !== undefined) data.name = name;
        if (departmentId !== undefined) data.departmentId = departmentId;

        return await prisma.position.update({
            where: { id },
            data,
            select: {
                id: true,
                name: true,
                departmentId: true,
                createdAt: true,
                updatedAt: true,
                department: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });
    }

    async deletePosition(id) {
        if (!id) {
            throw new Error("O parâmetro 'id' é obrigatório.");
        }

        return await prisma.position.delete({
            where: { id },
            select: {
                id: true,
                name: true,
                departmentId: true
            }
        });
    }
}
