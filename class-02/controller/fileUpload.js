const File = require("../modals/File");
const cloudinary = require('cloudinary').v2; // Make sure to import the Cloudinary module



// LocalFileUpload -> Handaler function
exports.localFileUpload = async(req, res) => {
    try{
        // fitch fileFrom request
        const file = req.files.file;

        //create path where file need to be stored on server
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;

        //create a successful response
        file.mv(path, (error) => {
            console.log(error);
        });

        //create a successful response
        res.json({
            success: true,
            massage: "local file uploaded successfully...!",
        })
    }
    catch(error){
        console.log(error);
    }
}



function supportedFileType(supportedFile, fileType) {
    return supportedFile.includes(fileType);
}

const uploadFileToCloudnarry = async (file, folder, quality) => {
    const options = { folder };
    console.log("temp file path", file.tempFilePath);

    if (quality) {
        options.quality = quality;
    }

    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

// image upload ka handler
exports.imageUpload = async (req, res) => {
    try {
        // fetch data from request body
        const { name, email, tag } = req.body;
        console.log(name, email, tag);

        const file = req.files.imageUrl;

        // validation
        const supportedFile = ["jpeg", "jpg", "png"];
        const fileType = file.name.split(".")[1].toLowerCase();
        console.log(fileType);

        if (!supportedFileType(supportedFile, fileType)) {
            return res.status(400).json({
                success: false,
                message: "file type is not supported",
            });
        }

        console.log("temp file path", file.tempFilePath); // Ensure tempFilePath is correct

        // file Format is supported hai
        const response = await uploadFileToCloudnarry(file, "sample-trying");
        console.log(response);

        // db me entry save krni hai
        const fileData = await File.create({
            name,
            tag,
            email,
            imageUrl: response.secure_url,
        });

        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "Image Successfully Uploaded",
        });

    } catch (error) {
        console.log("file is not uploaded", error);
        res.status(400).json({
            success: false,
            message: "file is not uploaded, please try again....!"
        });
    }
}

