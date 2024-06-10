const hotelService = require('../services/hotelService');

const createHotel = async (req, res) => {
    try {
        const credentials = req.body;
        const requiredFields = [ 
            "name",
            "location",
            "description", 
            "user_id",
            "property_id",
            "country_id",
            "state_id",
            "city_id",
            "commission_id",
            "address", 
            "longitute", 
            "latitude" ,
            "minimum_stay", 
            "refund_type" ,
            "status" ];

        validateFields(credentials, requiredFields);

        const data = {
            name: req.body.name,
            location: req.body.location,
            description: req.body.description,
            user_id: req.body.user_id,
            property_id: req.body.property_id,
            country_id: req.body.country_id,
            state_id: req.body.state_id,
            city_id: req.body.city_id,
            commission_id: req.body.commission_id,
            address: req.body.address,
            longitute: req.body.longitute,
            latitude: req.body.latitude,
            minimum_stay: req.body.minimum_stay,
            refund_type: req.body.refund_type,
            status: req.body.status,
        }

        const newHotel = await hotelService.createHotel(data);
        res.json(newHotel);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateHotel = async (req, res) => {
    try {
        const credentials = req.body;
        const requiredFields = [ 
            "name",
            "location",
            "description", 
            "user_id",
            "property_id",
            "country_id",
            "state_id",
            "city_id",
            "commission_id",
            "address", 
            "longitute", 
            "latitude" ,
            "minimum_stay", 
            "refund_type" ,
            "status" ];

        validateFields(credentials, requiredFields);

        // Extract the hotel ID from the request parameters
        const id = req.params.id;

        // Create a new object with updated hotel data (excluding id and created fields)
        const data = {
            name: req.body.name,
            location: req.body.location,
            description: req.body.description,
            user_id: req.body.user_id,
            property_id: req.body.property_id,
            country_id: req.body.country_id,
            state_id: req.body.state_id,
            city_id: req.body.city_id,
            commission_id: req.body.commission_id,
            address: req.body.address,
            longitute: req.body.longitute,
            latitude: req.body.latitude,
            minimum_stay: req.body.minimum_stay,
            refund_type: req.body.refund_type,
            status: req.body.status,
        };

        // Delete the id field from the data object
        delete data.id;
        delete data.created;
        // Call the updateHotel function with the extracted ID and updated data
        const updatedHotel = await hotelService.updateHotel(id, data);

        // Handle the response
        if (updatedHotel) {
            res.status(200).json(updatedHotel);
        } else {
            res.status(404).send(); // Hotel not found
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const validateFields = (data, requiredFields) => {
    requiredFields.forEach(field => {
        if (!data[field]) {
            throw new Error(`Not found ${field}`);
        }
    });
};

module.exports = {
    createHotel,
    updateHotel
};