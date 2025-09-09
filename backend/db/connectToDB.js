const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectTODB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to Database");
    } catch (error) {
        console.log("Error :", error);
    }
}
module.exports = connectTODB;