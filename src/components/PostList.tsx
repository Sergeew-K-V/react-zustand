// import { useEffect } from "react";
import usePostStore from "../store/post-store";

const PostList = () => {
  console.log("2");
  const posts = usePostStore((state) => state.posts);
  // const fetchPosts = usePostStore((state) => state.fetchPosts);

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  if (!posts.length) {
    return <div className="post-list">No posts</div>;
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <div key={post.id} className="post-item">
          <h2 className="post-title">{post.title}</h2>
          <p className="post-body">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
