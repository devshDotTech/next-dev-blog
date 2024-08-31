import Link from "next/link"

const Tag = ({ title, count }: {
    title: string,
    count: number
}) => {
    return (
        // <span>{title+ " " + count}</span>
        <Link href={`/explore/${title}`} className='text-neutral-400 bg-neutral-800 w-full text-sm sm:w-auto px-3 py-1.5 mr-2 mb-2 rounded-md hover:text-black hover:bg-neutral-400' >
            <div className='flex justify-between items-center gap-2' >
                <span>{title}</span>
                <span className='text-neutral-500' >{count}</span>
            </div>
        </Link>
    )
}

export default Tag
