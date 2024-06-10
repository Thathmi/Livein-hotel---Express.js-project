const commissionsService = require('../services/commissionsService');

const createCommissions = async (req, res) => {
    try {
        const credentials = req.body;
        const requiredFields = ["rate", "status"];

        const validationError = validateFields(credentials, requiredFields, res);
        if (validationError) {
            return;
        }

        data = {
            rate: req.body.rate,
            status: req.body.status
        }

        const countries = await commissionsService.createCommissions(data);
        if (countries) {
            res.status(200).json(countries);
        } else {
            res.status(404).send("Commissions could not be created.");
        }

    } catch (err) {
        console.error("Error ", err);
        res.status(500).send(err);
    }
}

const updateCommissions = async (req, res) => {
    try {
        data = {
            id: parseInt(req.params.id),
            rate: req.body.rate,
            status: req.body.status
        }
        
        const countries = await commissionsService.updateCommissions(data);
        if (countries) {
            res.status(200).json(countries);
        } else {
            res.status(404).send();
        }
    } catch (err) {
        console.error("Error ", err);
        res.status(500).send(err);
    }
}


const validateFields = (data, requiredFields, res) => {
    for (const field of requiredFields) {
        if (!data[field]) {
            res.status(400).send(`Not found ${field}`);
            return true;
        }
    }
    return false;
};

module.exports = {
    createCommissions,
    updateCommissions
}