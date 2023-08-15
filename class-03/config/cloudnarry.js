const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const cloutnarryConnect = async (req, res) => {
  try {
        cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
        });
        console.log("cloudnerry connection is successfully");
  } 
  catch (err) {
       console.log(`cloudinary is not connect ${err}`);
  }
};

module.exports = cloutnarryConnect;


// ======================== Chat GPT ========================
// const cloudinary = require("cloudinary").v2; // Importing the v2 of the cloudinary package
// const { config } = require("dotenv");

// require("dotenv").config();

// const cloudinaryConnect = async (req, res) => {
//     try {
//         const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;
        
//         cloudinary.config({
//             cloud_name: CLOUD_NAME,
//             api_key: API_KEY,
//             api_secret: API_SECRET,
//         });

//         console.log("Cloudinary connected successfully");
//     } catch (err) {
//         console.error(`Cloudinary is not connected: ${err}`);
//     }
// };

// module.exports = cloudinaryConnect;
