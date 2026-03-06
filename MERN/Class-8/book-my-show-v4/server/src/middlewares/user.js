const { AuthenticationError } = require("../core/ApiError");
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'weneedabettersecret';

const isLoggedIn = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        throw new AuthenticationError('Please login to continue');
    }
    const token = authHeader.replace("Bearer ", "");
    const {userId} = jwt.verify(token, JWT_SECRET);
    req.userId = userId;
    next();
}

module.exports = {
    isLoggedIn
}