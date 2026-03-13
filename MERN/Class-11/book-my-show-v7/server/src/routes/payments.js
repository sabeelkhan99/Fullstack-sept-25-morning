const express = require('express');
const Payment = require('../models/Payment');
const ApiResponse = require('../core/ApiResponse');

const router = express.Router();

router.post('/payments', async(req, res) => {
    const { method, amount, bookingId } = req.body;
    const { userId = '69aa42142795f6bfe070272f' } = req;
    
    const payment = await Payment.create({ method, amount, bookingId, userId });

    // call stripe payment gateway

    res.json(ApiResponse.build(true, payment, 'Payment created successfully'));
})

module.exports = router;