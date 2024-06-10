const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createStatus = async (statusData) =>{
    return prisma.status.create({data : statusData});
}

const updateStatus = async (statusData)=>{
    return prisma.status.update({
        where: { id: statusData.id },
        data: { 
            name: statusData.name,
            code: statusData.code,
            status:statusData.status 
        },
    });
}


module.exports = {
    createStatus,
    updateStatus,
}