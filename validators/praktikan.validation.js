const { param, body } = require('express-validator');
const { validator } = require('./validator');


const getPraktikanByName  = [
    param('nama').isLength({min: 8}),
    validator
]

const getPraktikanByEmailAndTelepon  = [
    param('email').isEmail(),
    param('telepon').isLength(12),
    validator
]

const insertPraktikan =  [
    body('nama').isLength({min: 8}),
    body('jenis_kelamin').isIn(['L','P']),
    body('angkatan').isInt({min: 2018}),
    body('email').isEmail(),
    body('telepon').isLength(12),
    body('deskripsi').notEmpty(),
    validator
]

const insertBulkPraktikan  = [
    body('*.nama').isLength({min: 8}),
    body('*.jenis_kelamin').isIn(['L','P']),
    body('*.angkatan').isInt({min: 2018}),
    body('*.email').isEmail(),
    body('*.telepon').isLength(12),
    body('*.deskripsi').notEmpty(),
    validator
]

const deletePraktikan = [
    body('email').isEmail(),
    validator
]

const updatePraktikan = [
    body('nama').isLength({min: 8}),
    body('telepon').isLength(12),
    validator
]

module.exports = {
    getPraktikanByName,
    getPraktikanByEmailAndTelepon,
    insertPraktikan,
    insertBulkPraktikan,
    deletePraktikan,
    updatePraktikan
}