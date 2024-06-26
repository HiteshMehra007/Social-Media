import React from 'react'

const CreatePost = () => {
  return (
    <div>
        <form action="POST">
            <label>
                <textarea
                    placeholder="What's going on?"
                    className='textarea w-full p-0 text-lg resize-none border-none focus:outline-none border-gray-800' />
            </label>
            <label>
                <input type="file" />
            </label>
            <button className='rounded-full bg-blue-500 px-4 py-1 text-white'>Post</button>
        </form>
    </div>
  )
}

export default CreatePost