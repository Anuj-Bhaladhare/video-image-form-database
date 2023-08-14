
const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Database connected successfully...!");
    })
    .catch((error) => {
        console.log(`DB not connected, error is: ${error}`);
        console.error(error);
        process.exit(1);
    });
};
