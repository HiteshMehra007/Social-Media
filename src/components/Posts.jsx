import React from 'react'
import Post from './Post'

import {images} from "../constants";

const Posts = () => {
  return (
    <div>
      <Post img={images.vitePost} username={"Hitesh"} postedAt={"1h"} />
    </div>
  )
}

export default Posts