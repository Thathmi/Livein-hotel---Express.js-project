const countriesService = require('../services/countriesService');

const createCountries = async (req, res) => {
    try {
        const credentials = req.body;
        const requiredFields = ["name", "code", "status"];

        const validationError = validateFields(credentials, requiredFields, res);
        if (validationError) {
            return;
        }

        data = {
            name: req.body.name,
            code: req.body.code,
            status: req.body.status
        }

        const countries = await countriesService.createCountries(data);
        if (countries) {
            res.status(200).json(countries);
        } else {
            res.status(404).send("Countries could not be created.");
        }

    } catch (err) {
        console.error("Error ", err);
        res.status(500).send(err);
    }
}

const updateCountries = async (req, res) => {
    try {
        data = {
            id: parseInt(req.params.id),
            name: req.body.name,
            code: req.body.code,
            status: req.body.status
        }
        
        const countries = await countriesService.updateCountries(data);
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

const deleteCountries = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const deletedCountries = await countriesService.deleteCountries(id);
        if (deletedCountries){
            res.status(200).send('Successfully deleted.');
        } else {
            res.status(404).send();
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

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
    createCountries,
    updateCountries,
    deleteCountries
}