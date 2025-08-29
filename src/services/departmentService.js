import prisma from "../prisma/PrismaClient.js";

export async function createDepartment(data) {
    return await prisma.department.create({
        data,
    });
}
