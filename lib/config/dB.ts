import mongoose from "mongoose";

const connectDb = async () => {
    if (mongoose.connections[0].readyState) return;
    try {
        await mongoose.connect('mongodb+srv://shivamdurgude:11112222@cluster0.hny5grp.mongodb.net/blog');
        console.log("[db]:Database Connected");
    } catch (e) {
        console.log('[error]:', (e as Error).message)
    }
}

export default connectDb;