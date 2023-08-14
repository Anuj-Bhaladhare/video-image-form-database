const mongoose = require("mongoose");

require("dotenv").config();

exprorts.connect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then( () => {
        console.log("Database connnected successfully...!");
    })
    .catch( (error) => {
        console.log(`db not connect ad error is ${error}`);
        console.log(error);
        process.exit(1);
    })
}
