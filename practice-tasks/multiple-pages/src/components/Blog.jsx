import Card from "./Card"
import blogData from "../data/blogData";

const Blog = () => {
    return (
        <div>
            <h1 className="blog-head">All Blog Posts</h1>
            <div className="cards">
              {blogData.map((post, index) => (
                <Card
                  key={post.id}
                  title={post.title}
                  image={post.image}
                  summary={post.summary}
                  link={post.link}
                />
              ))}
            </div>
        </div>
    );
};

export default Blog;