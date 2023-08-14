const cloudnerry = require("cloudinary");

require("dotenv").config();

const cloudnerryDatabase = () => {
    try{
        cloudnerry.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET,
        })
    }
    catch(error){
        console.log(`cloudnerry error ${error}`);
    }
}

module.exports = cloudnerryDatabase;