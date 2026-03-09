const express = require('express');
const Theatre = require('../models/Theatre');
const ApiResponse = require('../core/ApiResponse');
const { isLoggedIn, isPartnerOrAdmin } = require('../middlewares/user');

const router = express.Router();

router.post('/theatres',isLoggedIn, isPartnerOrAdmin, async (req, res) => {
    const { name, capacity, address, contactNo } = req.body;
    const theatre = await Theatre.create({ name, capacity, address, contactNo });
    res.json(ApiResponse.build(true, {theatre}, 'Theatre created successfully'));
});

router.get('/theatres',isLoggedIn, isPartnerOrAdmin, async (req, res) => {
    const theatres = await Theatre.find();
    res.json(ApiResponse.build(true, {theatres}, 'Theatres fetched successfully'));
});

module.exports = router;