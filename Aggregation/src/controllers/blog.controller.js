import blog from "../models/blogs.js"

export const createBlog = async (req, res) => {
    try {
        const { title, content } = req.body
        if(!req.user){
            return res.status(403).json({Message: "Log in to create blog!"})
        }
        const newBlog = await blog.create({
            title,
            content
        })
        console.log(newBlog)
        res.status(200).json({ message: "Blog created successfuly!" })
    } catch (error) {
        res.status(401).json({ message: "Can't create Blog!" })
    }

}

export const deleteBlog = async (req, res) => {
    try {
        const { _id } = req.query
        if(!req.user){
            return res.status(403).json({Message: "Log in to delete blog!"})
        }
        await blog.findByIdAndDelete({_id})
        res.status(200).json({ message: "Blog deleted successfuly!" })
    } catch (error) {
        res.status(401).json({ message: "Can't delete Blog!" })
        console.log(error)
    }

}

export const getBlogs = async (req , res) => {
    try {
        if(req.query){
            console.log(req.user)
            if (!req.user) {
                return res.status(403).json({Message: "Log in to perform this task!"})
            }
            const page = Number(req.query.page)
            const limit = Number(req.query.limit)
            const skip = (page - 1) * limit
            const blogs = await blog.aggregate([
                { $sort: {createdAt: -1}},
                {$skip: skip},
                {$limit: limit}
            ])
            return res.status(200).json(blogs)
        }
        const blogs = await blog.find()
        res.status(200).json(blogs)
        


    } catch (error) {
        res.status(404).json({message: "No Blog found!"})
        console.log(error)
    }
}

export const getAllBlogs = async (req , res) => {
    try {

        const blogs = await blog.find()
        res.status(200).json(blogs)
    } catch (error) {
        res.status(404).json({message: "No Blog found!"})
        console.log(error)
    }
}