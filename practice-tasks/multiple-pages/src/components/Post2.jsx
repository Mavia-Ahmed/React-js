// src/components/Post1.jsx
import blogData from '../data/blogData';

const Post2 = () => {
  // Get the first blog post
  const blog = blogData.find(item => item.id === 2);

  return (
    <div className="blog-post">
      <h1>{blog.title}</h1>
      <p>{blog.time}</p>
      <img src={blog.image} alt={blog.title}/>
      <p>{blog.para}</p>
    </div>
  );
};

export default Post2;
