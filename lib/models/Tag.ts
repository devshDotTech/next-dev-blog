import mongoose from "mongoose";

const tagsModel = () => {
    const tagsSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true,
        },
        count: {
            type: Number,
            default: 1,
        }
    })

    return mongoose.models.tags || mongoose.model('tags', tagsSchema);
}

export const db = {
    Tags: tagsModel()
}