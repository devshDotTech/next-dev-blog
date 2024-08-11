import { NextRequest as req, NextResponse as res } from "next/server";
import connectDb from "@/lib/config/dB";
import { db } from "@/lib/models/Post";

connectDb();
const Posts = db.Posts;

const GET = async (req: req, {params}: {params: {slug: string}}) => {
    const slug = params.slug;
    try {
        const post = await Posts.findOne({slug: slug});
        if (!post) {
            return res.json({msg: "Post you are looking for does not exist"});
        }
        else return res.json({msg: "post found successfully", post})
    } catch (error) {
        return res.json({error: "Error while finding post using slug:" + slug + "Error:" + (error as Error).message})
    }
}

export {
    GET
}