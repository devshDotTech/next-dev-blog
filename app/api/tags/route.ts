import { NextRequest as req, NextResponse as res } from "next/server";
import connectDb from "@/lib/config/dB";
import { db } from "@/lib/models/Tag";

connectDb();

const Tags = db.Tags;

const GET = async (req: req) => {
    try {
        const tags = await Tags.find({});
        return res.json({msg: "tags fetched sucessfully", tags});
    } catch (error) {
        return res.json({error: "Error while fetching the post" + (error as Error).message});
    }
}

export {
    GET
}