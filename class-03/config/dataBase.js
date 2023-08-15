const mongoose = require("mongoose");

require("dotenv").config();

module.connect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then( () => {
        console.log("Database Connection is succesfully...!");
    })
    .catch( (error) => {
        console.log(`Database is not connect ${error}`);
        console.error(error);
        process.exit(1);
    });
}