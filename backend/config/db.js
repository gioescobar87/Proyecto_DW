const mongoose = require('mongoose');

const connectToDataBase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database Error', error);
    }
};
//sd
module.exports = { connectToDataBase };
