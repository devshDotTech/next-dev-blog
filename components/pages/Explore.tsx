"use client";
import React, { useEffect, useState } from 'react'
import Tag from '../ui/Tag';

const Explore = () => {
    const [tags, setTags] = useState([]);
    const [filter, setFilter] = useState(false);
    useEffect(() => {
        const fetchTags = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/tags");
                const data = await res.json();
                // if (data.tags) 
                setTags(data.tags);
                console.log(data.msg);
            } catch (error) {
                console.log((error as Error).message);
            }
        };
        fetchTags();
    }, []);
    return (
        <div className='text-white py-1 sm:py-5' >
            <div className="container max-w-3xl py-1 mx-auto px-4 flex flex-col">
                <div className=" mb-2 sm:mb-5 ">
                    <h1 className='text-3xl font-bold sm:text-6xl mb-2 sm:mb-4' >Explore</h1>
                    <p className='text-text-secondary text-md sm:text-xl' >Navigate your way through the guides and tutorials.</p>
                </div>
                <div className='flex flex-col flex-wrap relative mb-56' >
                    <div className='flex justify-between items-center mb-1' >
                        <h2 className="mb-4 mt-7 text-xs tracking-wide uppercase text-neutral-500">
                            Guides by Tag
                        </h2>
                        <div className='flex gap-1 border-2 border-white rounded-md cursor-pointer mt-3' onClick={() => setFilter(filter => !filter)}  >
                            <div className={`${filter ? ' text-neutral-400 bg-neutral-900' : 'bg-neutral-400 text-black'} text-xs p-1 rounded-s-md transition-colors `} >A-Z</div>
                            <div className={`${filter ? 'bg-neutral-400 text-black' : 'text-neutral-400 bg-neutral-900'} text-xs p-1 rounded-e-md`}>Num</div>
                        </div>
                    </div>
                    <div className='flex flex-wrap items-center' >
                        {(filter ? tags.sort((a: { count: number }, b: { count: number }) => b.count - a.count) : tags.sort((a: { title: string }, b: { title: string }) => a.title.localeCompare(b.title))).map(({ _id, title, count }) => (
                            <Tag key={_id} title={title} count={count} />
                        )
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore

// : 