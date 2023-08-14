const File = require("../modals/File");

// LocalFileUpload -> Handaler function
exports.localFileUpload = async(req, res) => {
    try{
        // fitch file
        const file = req.files.file;

        let path = __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;

        file.mv(path, (error) => {
            console.log(error);
        });

        res.json({
            success: true,
            massage: "local file uploaded successfully...!",
        })
    }
    catch(error){
        console.log(error);
    }
}