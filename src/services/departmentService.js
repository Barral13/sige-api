import prisma from "../prisma/PrismaClient.js";

export async function createDepartment(data) {
    return await prisma.department.create({
        data,
    });
}

export async function getAllDepartments() {
    return await prisma.department.findMany();
}

export async function getDepartmentById(id) {
    return await prisma.department.findUnique({
        where: { id },
    });
}

export async function updateDepartment(id, data) {
    return await prisma.department.update({
        where: { id },
        data,
    });
}

export async function deleteDepartment(id) {
    return await prisma.department.delete({
        where: { id },
    });
}
