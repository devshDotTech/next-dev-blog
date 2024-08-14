"use client";
import React, { useEffect, useState } from 'react'
import PostHeader from '../ui/Post';

interface Post {
  title: string,
  _id: string,
  content: string,
  tags: [string],
  slug: string,
  date: Date
}

const Landing = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/posts');
        const data = await res.json();
        setPosts(data);
        console.log(data)
      } catch (error) {
        console.log("error in fetching posts ", (error as Error).message);
      }
    };
    fetchPosts();
  }, [])

  return (
    <div className='text-white py-1 sm:py-5'>
      <div className="container max-w-3xl py-1 mx-auto px-4 flex flex-col gap-y-3">
        <div>
          <h1 className='text-5xl font-bold sm:text-9xl mb-2 sm:mb-4' >dev.sh</h1>
          <p className='text-text-secondary text-md sm:text-xl' >A collection of guides and tutorials on web development and devops.</p>
        </div>
        {posts.map(({ _id, title, date, slug }) => <PostHeader key={_id} title={title} date={date} slug={slug} />)}
      </div>
    </div>
  )
}


export default Landing