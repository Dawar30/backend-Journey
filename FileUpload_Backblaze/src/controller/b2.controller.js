import b2 from "../config/b2Config.js";
import dotenv from "dotenv"
import user from "../models/user.model.js";
import fs from "fs"

dotenv.config()

export const uploadFile = async (req, res) => {

    try {
        await b2.authorize()
        console.log("Authentication completed")
        const uploadUrl = await b2.getUploadUrl({
            bucketId: process.env.b2_bucket_ID
        })

        const fileBuffer = fs.readFileSync(req.file.path)
        const uploadedFile = await b2.uploadFile({
            uploadUrl: uploadUrl.data.uploadUrl,
            uploadAuthToken: uploadUrl.data.authorizationToken,
            fileName: req.file.originalname,
            data: fileBuffer
        })

        const result = await user.create({
            name: req.body.name,
            email: req.body.email,
            Image: {
                filePath: req.file.path,
                fileName: req.file.originalname
            }
        })

        res.status(200).json({
            success: true
        }, result)
    } catch (error) {
        res.status(500).json({ message: "Can't upload file!" })
        console.log(error)
    }
}

export const getUserInfo = async (req, res) => {
    try {
        await b2.authorize()
        const { email } = req.query
        const result = await user.findOne({ email })
        const authDownload = await b2.getDownloadAuthorization({
            bucketId: process.env.b2_bucket_ID,
            fileNamePrefix: "",
            validDurationInSeconds: 3600,
        })
        const fileUrl = `${b2.downloadUrl}/file/${process.env.b2_bucketName}/${result.Image.fileName}?Authorization=${authDownload.data.authorizationToken}`

        res.status(200).json({name: result.name, email: result.email, Image: fileUrl})
    } catch (error) {
        res.status(404).json({ message: "User not found!" })
        console.log(error)
    }
} 