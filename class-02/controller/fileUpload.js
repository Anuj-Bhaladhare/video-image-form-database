const File = require("../modals/File");
const cloudinarry = require("cloudinary");


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


const cloudinary = require('cloudinary').v2; // Make sure to import the Cloudinary module

function isFileTypeSupported(type, supportedTypes) {
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder, quality) {
    const options = { folder };

    if (quality) {
        options.quality = quality;
    }

    options.resource_type = 'auto';
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

// image upload ka handler
exports.imageUpload = async (req, res) => {
    try {
        // Destructure fields from req.body
        const { tags, name, email } = req.body;

        // Destructure 'imageFile' from req.files
        const { imageFile } = req.files;

        // Validation
        const supportedTypes = ['jpg', 'png', 'jpeg'];
        const fileType = imageFile.name.split('.').pop().toLowerCase(); // Get the file extension

        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: 'File format not supported',
            });
        }

        // File format supported
        const response = await uploadFileToCloudinary(imageFile, 'codehelp');

        // Create a record in the database (assuming you have a 'File' model)
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url,
        });

        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: 'Image Successfully Uploaded',
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};
