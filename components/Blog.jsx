const Blog = () => {
    const blogPosts = [
      {
        title: "Getting Started with React",
        description:
          "Learn the basics of React, including components, state, and props.",
        link: "https://example.com/blog/react-basics",
      },
      {
        title: "Mastering Tailwind CSS",
        description:
          "A comprehensive guide to using Tailwind CSS for modern web development.",
        link: "https://example.com/blog/tailwind-css",
      },
      {
        title: "Building REST APIs with Node.js",
        description:
          "Step-by-step guide to creating RESTful APIs using Node.js and Express.",
        link: "https://example.com/blog/nodejs-rest-api",
      },
    ];
  
    return (
      <section className="p-8 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-8">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
              <p className="mb-4">{post.description}</p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Blog;