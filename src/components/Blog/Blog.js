import "./Blog.scss";

export const Blog = ({ title, blogs }) => {
  return (
    <div className="blog-container">
      <h2 className="blog-title">{title}</h2>
      {blogs.map((blog, id) => (
        <div key={id} className="blog">
          <img src={blog.image} alt={blog.description} className="blog__image" />
          <h3 className="blog__title">{blog.title}</h3>
          <p className="blog__text">{blog.text}</p>
        </div>
      ))}
    </div>
  );
};
