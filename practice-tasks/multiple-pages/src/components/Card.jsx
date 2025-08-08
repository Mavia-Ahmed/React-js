// src/components/BlogCard.jsx
const Card = ({ title, image, summary, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{summary}</p>
      <a href={link}>Read more</a>
    </div>
  );
};

export default Card;

