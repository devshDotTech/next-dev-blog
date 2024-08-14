"use client";
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Content from '../ui/Content';

const Posts =  () => {
    const { slug } = useParams();
    const [post, setPost] = useState({
        title: "",
        content: "",
        tags: [],
        slug: "",
        date: ""
    });
    useEffect(() => {
        const fetchPostBySlug = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/posts/${slug}`);
                const data = await res.json();
                setPost(data.post);
                console.log(data);
            } catch (error) {
                console.log("error while fetching post by slug ", (error as Error).message);
            }
        };
        fetchPostBySlug()
    }, [slug]);
    return (
        <>
            <div className='container max-w-3xl mx-auto px-4 text-white' >
                <div className=' mt-5 mb-5 sm:mb-10 sm:mt-7'>
                    <p className='space-x-2 sm:text-base'>
                        {post.tags.map((tag, index) => {
                            return (
                                <Link key={index} href={`/explore/${tag}`} className='py-1 bg-neutral-700 text-neutral-300 px-3.5 rounded-full text-base' >{tag}</Link>
                            )
                        })
                        }
                    </p>
                    <p className='text-neutral-100 line-height-[25px] my-4 text-3xl sm:text-6xl sm:my-5  font-extrabold sm:leading-[70px]' >{post.title}</p>
                    <p className='text-text-secondary sm:text-xl text-sm' >{post.date && new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}</p>
                </div>
                <Content content={post.content} />
            </div>
        </>
    )
}

export default Posts