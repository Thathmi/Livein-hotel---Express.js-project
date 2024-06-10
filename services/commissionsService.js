const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createCommissions = async (commissionsData) => {
    return prisma.commissions.create({ data: commissionsData });
}

const updateCommissions = async (commissionsData) => {
    return prisma.commissions.update({
        where: { id: commissionsData.id },
        data: { 
            rate: commissionsData.rate,
            status: commissionsData.status
        },
    });
}


module.exports = {
    createCommissions,
    updateCommissions
}