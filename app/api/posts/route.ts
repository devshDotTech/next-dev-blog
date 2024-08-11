import { NextRequest as req, NextResponse as res } from "next/server";
import connectDb from "@/lib/config/dB";
import { db as postDB } from '@/lib/models/Post'
import { db as tagDB } from '@/lib/models/Tag'
import slugify from "slugify";

connectDb();
const Posts = postDB.Posts;
const Tags = tagDB.Tags;


const GET = async (req: req) => {
    try {
        const posts = await Posts.find({});
        return res.json(posts, { status: 200 })
    } catch (error) {
        return res.json(error as Error, { status: 404 })
    }
}

const POST = async (req: req) => {
    const { title, content, tags } = await req.json();
    const tagsArray = tags.split(',').map((tag: string) => tag.trim());
    const slug = slugify(title, { lower: true });
    
    try {
        const post = await Posts.create({ title, content, tags: tagsArray, slug });
        tagsArray.forEach(async (tag: string) => {
            console.log("tag:", tag);
            try {
                const tagExists = await Tags.findOne({ title: tag });
                console.log('tagExists: ', tagExists);
                if (tagExists) {
                    tagExists.count += 1;
                    await tagExists.save();
                }
                else {
                    try {
                        await Tags.create({ title: tag });
                        console.log("Tag Created", tag);
                    } catch (error) {
                        console.log("error while creating new tag", (error as Error).message);
                    }
                }
            } catch (error) {
                console.log("error while finding tag in db: ", (error as Error).message);
            }
    
        })
        return res.json({ message: 'Post created successfully', post });
    } catch (err) {
        return res.json({ error: "error while creating new post" + (err as Error).message });
    }
}

export {
    GET, POST
}