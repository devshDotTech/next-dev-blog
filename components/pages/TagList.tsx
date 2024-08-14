"use client";
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import PostHeader from '../ui/Post';

const TagList = () => {
    const { tag } = useParams();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPostBySlug = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/tags/${tag}`);
                const data = await res.json();
                setPosts(data.posts);
                console.log(data);
            } catch (error) {
                console.log("error while fetching post by slug ", (error as Error).message);
            }
        };
        fetchPostBySlug()
    }, []);
    return (
        <div className='text-white py-1 sm:py-5' >
            <div className="container max-w-3xl py-1 mx-auto px-4 flex flex-col">
                <div className=" mb-2 sm:mb-5 ">
                    <h1 className='text-3xl font-bold sm:text-6xl mb-2 sm:mb-4' >{tag}</h1>
                    <p className='text-text-secondary text-md sm:text-xl' >Navigate your way through the guides and tutorials for {tag}.</p>
                </div>
                <div>
                    {posts.map(({_id, title, date, slug}) => (
                        <PostHeader key={_id} title={title} date={date} slug={slug} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TagList