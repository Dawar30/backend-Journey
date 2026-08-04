import cloudinary from "../config/cloudinary.js";
import file from "../model/fileUpload.js"


export const cloudinaryUpload = async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const result = await cloudinary.uploader.upload(req.file.path);
    const { name, Address, phone } = req.body
    const fileSaved = await file.create({
      name,
      Address,
      phone,
      fileName: result.original_filename,
      fileUrl: result.secure_url
    })


    return res.status(200).json({
      success: true,
      message: "Image uploaded successfully",
      data: fileSaved
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Cloudinary upload failed",
      error: error.message,
    });
  }
};

export const getUsers = async (req, res) => {
  const name = req.query.name
  try {
    console.log(!name)
    if (!name) {
      const data = await file.find()
      return res.json({
        data
      })
    }
    const data = await file.find({
      name: { $regex: name, $options: "i" }
    })
    res.json({
      data
    })
  } catch (error) {
    res.status(404).json({ message: "Not found" })
    console.log(error)
  }
}
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id
    const deleteStudent = await file.findByIdAndDelete(id)
    res.status(200).json({ message: "Deleted successfully" },deleteStudent)
  } catch (error) {
    res.status(404).json({message: "User not found"})
    console.log(error)
  }
}

