// App create karana hai
const express = require("express");
const app = express();

// Port Define karana hai
require("dotenv").config();
// const PORT = process.env.PORT || 3000;

// MongoDB se connet karo
const MongooConnect = require("./config/dataBase");
MongooConnect.connect();

// Cloude se connect karana hai
const cloudConnect = require("./config/cloudnerry");
cloudConnect.cloudinaryConnect();

// Middlewear add karana hai
app.use(express.json());
const fileUpload = require("express-fileupload");
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

// API routes mount karana hai
const Upload = require("./routes/FileUpload");
app.use("/api/v1/upload", Upload);

// server ko active karana hai
app.listen( 4000, (res, req) => {
    console.log(`Post started At ${4000}`);
})