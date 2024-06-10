const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createCountries = async (countriesData) =>{
    return prisma.countries.create({data : countriesData});
}

const updateCountries = async (countriesData)=>{
    return prisma.countries.update({
        where: { id: countriesData.id },
        data: { 
            name: countriesData.name,
            code: countriesData.code,
            status:countriesData.status 
        },
    });
}

const deleteCountries = async (id) =>{
    return prisma.countries.delete({
        where: { id: id },
    });
}

module.exports = {
    createCountries,
    updateCountries,
    deleteCountries
}