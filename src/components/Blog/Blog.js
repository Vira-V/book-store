import "./Blog.scss";

export const Blog = ({ title, blogs }) => {
  return (
    <>
      <h2 className="blog-title">{title}</h2>
      <div className="blog-container">
        {blogs.map((blog, id) => (
          <div key={id} className="blog">
            <img
              src={blog.image}
              alt={blog.description}
              className="blog__image"
            />
            <div className="blog__overlay"></div>
            <h3 className="blog__title">{blog.title}</h3>
            <p className="blog__text">{blog.text}</p>
            <button className="blog__read-more">Read more</button>
          </div>
        ))}
      </div>
    </>
  );
};
