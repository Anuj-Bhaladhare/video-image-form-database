const express = require("express");
const router = express.Router();

const { localFileUpload, imageUpload } = require("../controller/fileUpload");

// api routes
router.post("/localfileupload", localFileUpload );
router.post("/imageupload", imageUpload );

module.exports = router;