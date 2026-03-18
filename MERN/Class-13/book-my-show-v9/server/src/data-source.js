const mongoose = require('mongoose');

const dbUrl = 'mongodb://127.0.0.1:27017/book-my-show-morning';

class AppDataSource{
    static async connect() {
        await mongoose.connect(dbUrl)
    }
    static async disconnect() {
        await mongoose.disconnect();
    }
}

module.exports = AppDataSource;