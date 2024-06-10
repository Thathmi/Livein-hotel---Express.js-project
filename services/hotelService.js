const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();



const createHotel = async (hotelData) => {
    try {
        const newHotel = await prisma.hotel.create({
            data: hotelData
        });
        return newHotel;
    } catch (error) {
        console.error('Error creating hotel:', error);
        throw error; // Re-throw the error to handle it at a higher level
    }
};

const updateHotel = async (id, newhotelData) => {
    return prisma.hotel.update({
        where: { id: id },
        data: newhotelData
    });
};

module.exports = {
 
    createHotel   ,
    updateHotel
};
