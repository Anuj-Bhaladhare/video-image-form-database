// App create karana hai
const express = require("express");
const app = express();

// Port Define karana hai
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// MongoDB se connet karo
const MongooConnect = require("./config/dataBase");
MongooConnect.connect();

// Cloude se connect karana hai
const cloudConnect = require("./config/cloudnerry");
cloudConnect.cloudnerryDatabase();

// Middlewear add karana hai
app.use(express.json());
const fileUpload = require("express-fileupload");
app.use(fileUpload());

// API routes mount karana hai
const Upload = require("./routes/fileUpload");
app.use("/api/v1/upload", Upload);

// server ko active karana hai
app.listen( PORT, (res, req) => {
    console.log(`Post started At ${PORT}`);
})