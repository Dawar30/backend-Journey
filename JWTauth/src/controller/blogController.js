import Blog from "../model/blog.js";

export const newBlogg = async (req, res) => {
    try {
        const { content } = req.body
        const newPost = await Blog.create({
            content,
            createdBy: req.user.userID
        })
        res.status(200).json({message: "Post created!"},newPost)
    } catch (error) {
        res.status(500).json({message: "Internal server error"})
        console.log(error)
    }

}

export const getPosts = async (req , res) => {
    try {

        const results = await Blog.find()
        res.status(200).json(results)
    } catch (error) {
        res.status(404).json({message: "No Post found!"})
        console.log (error)
    }
}
