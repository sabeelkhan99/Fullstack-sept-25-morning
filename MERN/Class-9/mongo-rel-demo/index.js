const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://127.0.0.1:27017/mongo-rel-demo')
    .then(() => console.log('connection open!'))

async function addAddress(userId) {
    const user = await User.findById(userId);
    user.addresses.push({ city: 'Mumbai', country: 'India', zipCode: '123657' });
    await user.save();
    console.log('Address Addedd');
}

async function main() {
    // const user = await User.create({ name: 'Max', age: 25 });
    // console.log('User created');
    // console.log(user);
    await addAddress('69ae2e544410db3af222819c')
    mongoose.disconnect();
}

main();