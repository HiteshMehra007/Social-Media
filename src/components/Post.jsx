import React from 'react'
import { images } from "../constants";

const Post = ({ img, username, postedAt }) => {
  return (
    <div className=''>
        <div className='flex items-center gap-2 px-2 py-2 border border-t-2 border-b-2' >
            <img src={images.avatar} alt="avatar-image" className='rounded-full w-10' />
            <h1 className='text-lg '>{username}</h1>
            <p className=' mx-4 text-sm text-gray-400'>{`${postedAt} ago`}</p>
        </div>
        <div className='w-full'>
            <img src={img} alt="post-image" className='w-full' />
        </div>
    </div>
  )
}

export default Post;