const { praktikanServices } = require('../services');
const { responseHelper } = require('../helper');

const getPraktikans = async (req, res) => {
    try {

        const praktikans = await praktikanServices.getPraktikans();
        if(praktikans instanceof Error) {
            throw new Error(praktikans);
        } 
        res.status(responseHelper.status.success).json(praktikans);
        
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const getPraktikanByName = async (req, res) => {
    try {
        const { nama } = req.params;
        const praktikan = await praktikanServices.getPraktikanByName(nama);
        res.status(responseHelper.status.success).json(praktikan);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const getPraktikanByEmailAndTelepon = async (req, res) => {
    try {
        const { email, telepon } = req.params;
        const praktikan = await praktikanServices.getPraktikanByEmailAndTelepon(email, telepon);
        res.status(responseHelper.status.success).json(praktikan);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const insertPraktikan = async (req, res) => {
    try {
        const { nama, jenis_kelamin, angkatan, email, telepon, deskripsi } = req.body;
        const result = await praktikanServices.insertPraktikan(nama, jenis_kelamin, angkatan, email, telepon, deskripsi);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const insertBulkPraktikan = async (req, res) => {
    try {
        const result = await praktikanServices.insertBulkPraktikan(JSON.stringify(req.body));
        
        if(result instanceof Error) {
            throw new Error(result);
        }

        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const deletePraktikan = async (req, res) => {
    try {
        const { email } = req.body;
        const result = await praktikanServices.deletePraktikan(email);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const updatePraktikan = async (req, res) => {
    try {
        const { nama, telepon } = req.body;
        const result = await praktikanServices.updatePraktikan(nama, telepon);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

module.exports = {
    getPraktikans,
    getPraktikanByName,
    getPraktikanByEmailAndTelepon,
    insertPraktikan,
    insertBulkPraktikan,
    deletePraktikan,
    updatePraktikan
}