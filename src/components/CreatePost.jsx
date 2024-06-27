import React, { useRef, useState } from 'react';
import { CiImageOn } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

import { images } from "../constants";

const CreatePost = () => {

  const [img, setImg] = useState(null);
  const [text, setText] = useState("");

  const imgRef = useRef(null);

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onload = () => {
				setImg(reader.result);
			};
			reader.readAsDataURL(file);
    }
  }

  const handleSubmit = () => {

  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <div className='flex w-full'>
            <div className='w-full'>
            <div className='flex gap-2 p-1 w-full'>
              <div className='w-10'>
                <img className='rounded-full' src={images.avatar} alt="avatar image" />
              </div>
              <label className='w-full'>
                  <textarea
                      placeholder="What's going on?"
                      className='textarea text-gray-600 w-full p-0 text-lg resize-none border-none focus:outline-none border-gray-800'
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                  />
              </label>
            </div>
              {
                img && (
                  <div className="relative w-72 mx-auto">
                    <IoClose 
                      size={"1.25rem"}
                      className='absolute top-0 right-0 rounded-full bg-gray-300 cursor-pointer'
                      onClick={() => {
                        setImg(null);
                        imgRef.current.value = null;
                      }}
                    />
                    <img 
                    className="w-full mx-auto h-72 object-contain rounded" 
                    src={img}
                  />
                  </div>
                )
              }
            </div>
          </div>
          <div className='flex justify-between px-2 py-1'>
          <CiImageOn
            size={"1.4rem"}
            onClick={() => imgRef.current.click()} 
            className='cursor-pointer'
          />
            <label>
                <input hidden ref={imgRef} type="file" onChange={handleImgChange} />
            </label>
            <button className='rounded-full bg-blue-500 px-4 py-1 text-white cursor-pointer'>Post</button>
          </div>
        </form>
    </div>
  )
}

export default CreatePost