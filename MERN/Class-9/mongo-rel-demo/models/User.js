const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    addresses: [
        {   
            _id: false,
            city: String,
            country: String,
            zipCode: Number
        }
    ]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;