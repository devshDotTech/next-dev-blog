import { NextRequest as req, NextResponse as res } from "next/server";
import connectDb from "@/lib/config/dB";
import { db } from "@/lib/models/Post";

connectDb();

const Posts = db.Posts;

const GET = async (req: req, {params}: {params: {tag: string}}) => {
    const tag = params.tag;
    try {
        const posts = await Posts.find({tags: tag});
        return res.json({msg: "posts fetched successfully", posts});
    } catch (error) {
        return res.json({error: "Error while fetching posts: " + (error as Error).message});
    }
}

export {
    GET
}