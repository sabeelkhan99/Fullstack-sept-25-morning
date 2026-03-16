const express = require('express');
const User = require('../models/User');
const { BadRequestError } = require('../core/ApiError');
const bcrypt = require('bcrypt');
const ApiResponse = require('../core/ApiResponse');
const jwt = require('jsonwebtoken');
const { isLoggedIn } = require('../middlewares/user');

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

router.post('/register', async(req, res) => {
    const { email, password, role } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        throw new BadRequestError('User with this email is already registered');
    }
    const hash = await bcrypt.hash(password, 12);
    const newUser = new User({ email, password: hash, role });
    await newUser.save();
    res.json(ApiResponse.build(true, { email: newUser.email, role: newUser.role }, 'User created successfully'));
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    // check if user with email exist
    const user = await User.findOne({ email });
    if (!user) {
        throw new BadRequestError('Username or password is incorrect');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new BadRequestError('Username or password is incorrect')
    }

    // sign the token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {expiresIn: 3 * 24 * 60 *60});

    res.json(ApiResponse.build(true, { token }, 'LoggedIn Successfully'));
});

router.get('/profile', isLoggedIn, async (req, res) => {
    const { userId } = req;
    const user = await User.findById(userId).select('-password');
    res.json(ApiResponse.build(true, { email: user.email, role: user.role }, 'User profile'));
});

module.exports = router;