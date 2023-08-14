const express = require("express");
const router = express.Router();

const { localFileUpload } = require("../controller/fileUpload");

// api routes
router.post("/localfileupload", localFileUpload );

module.exports = router;