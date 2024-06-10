const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllUsers = async () => {
    return prisma.user.findMany();
};

const createUser = async (userData) => {
    return prisma.user.create({ data: userData });
};

const updateUser = async (id, newFirstName) => {
    return prisma.user.update({
        where: { id: id },
        data: { firstName: newFirstName },
    });
};

const deleteUser = async (id) => {
    return prisma.user.delete({
        where: { id: id },
    });
};

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
};
