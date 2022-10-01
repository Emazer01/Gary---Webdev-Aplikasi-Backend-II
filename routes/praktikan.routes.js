const express = require("express");
const router = express.Router();
const { praktikanController } = require("../controllers");
const { praktikanValidation } = require("../validators");
const { body, param, validationResult } = require('express-validator');

router.route("/").get(praktikanController.getPraktikans);

// Example with route /:name in longer version
/*
router.route("/:nama").get(
    param('nama').isLength({min: 8}),
    (req, res, next) => {
        const error = validationResult(req);
        if(!error.isEmpty()) {
            return res.status(400).json({errors: error.array()});
        }
        next();
    },
    praktikanController.getPraktikanByName);
*/
// Example with route /:name in shorter version

router.route("/:nama").get(praktikanValidation.getPraktikanByName, praktikanController.getPraktikanByName);
router.route("/:email/:telepon").get(praktikanValidation.getPraktikanByEmailAndTelepon, praktikanController.getPraktikanByEmailAndTelepon);
router.route("/insert").post(praktikanValidation.insertPraktikan, praktikanController.insertPraktikan);
router.route("/delete").delete(praktikanValidation.deletePraktikan, praktikanController.deletePraktikan);
router.route("/update").patch(praktikanValidation.updatePraktikan, praktikanController.updatePraktikan);


module.exports = router;