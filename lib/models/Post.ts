import mongoose from "mongoose";

const postModel = () => {
    const postSchema = new mongoose.Schema({
        title: {
            required: true,
            type: String
        },
        content: {
            type: String,
            required: true,
        },
        tags: [String],
        slug: {
            type: String,
            unique: true,
        },
        date: {
            type: Date,
            default: Date.now
        }
    })

    return mongoose.models.posts || mongoose.model('posts', postSchema);
}

export const db = {
    Posts: postModel(),
}

