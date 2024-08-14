"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Create = () => {
    const router = useRouter();
    const [post, setPost] = useState({
        title: '',
        content: '',
        tags: ''
    })
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [tags, setTags] = useState('')
    const handleSubmit = (e:any) => {
        e.preventDefault()
        console.log('title: ', title)
        console.log('content: ', content)
        console.log('tags: ', tags)
        // const data:BodyInit = { title, content, tags };
        const newPost = async() => {
            try {
                await fetch("http://localhost:3000/api/posts", {
                    method: 'POST',
                    body: JSON.stringify(post),
                })
                setTitle(" ");
                setContent(" ");
                setTags(" ");
                router.replace("/");
                
            } catch (error) {
                console.log('error: ', error);
                setTitle(" ");
                setContent(" ");
                setTags(" ");
                window.location.reload();
            }
        }
        newPost()
    }
    const onChangeHandler = (e: { target: HTMLInputElement | HTMLTextAreaElement }) => {
        const name = e.target.name;
        const value = e.target.value;
        setPost(post => ({...post, [name]: value}))
        console.log(value);
    }
    return (
        <div className='text-white py-1 sm:py-5' >
            <div className="container max-w-3xl py-1 mx-auto px-4 flex flex-col">
                <div className=" mb-2 sm:mb-5 ">
                    <h1 className='text-3xl font-bold sm:text-6xl mb-2 sm:mb-4' >Create New Post</h1>
                    <p className='text-text-secondary text-md sm:text-xl' >Increase your Knowledge tree and add new tech content.</p>
                </div>
                <form action="submit" onSubmit={(e) => handleSubmit(e)} className='flex flex-col mt-5' >
                    <label htmlFor="title" className='text-lg mb-2 rounded-md' >Title</label>
                    <input onChange={onChangeHandler} type="text" name="title" id="title" className='bg-[#404040] text-white px-4 py-2 mb-4 rounded-md' />
                    <label htmlFor="content" className='text-xl'>Content</label>
                    <textarea onChange={onChangeHandler} rows={10} className='bg-[#404040] text-white px-4 py-2 mb-4 rounded-md' name="content" id="content" />
                    <label htmlFor="tags" className='text-xl'>Tags</label>
                    <input onChange={onChangeHandler} type="text" name="tags" id="tags" className='bg-[#404040] text-white px-4 py-2 mb-4 rounded-md' />
                    <button type="submit" className='bg-[#404040] text-white px-4 py-2 mb-4 rounded-md'>Create</button>
                </form>
            </div>
        </div>
    )
}

export default Create