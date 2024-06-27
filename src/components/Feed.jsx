import CreatePost from "./CreatePost";
import Posts from "./Posts";

const Feed = () => {
  return (
    <div className="max-w-[40%] m-auto border border-gray-500">
      <CreatePost />
      <Posts />
    </div>
  )
}

export default Feed