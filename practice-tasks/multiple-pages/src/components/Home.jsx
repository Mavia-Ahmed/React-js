import Hero from "./Hero";
import Card from "./Card";
import blogData from "../data/blogData";

const Home = () => {
  return (
    <div>
        <Hero />
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

export default Home;
