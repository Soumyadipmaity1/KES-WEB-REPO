

const Blogs = ({ title, publicationDate, author, content, imagePath }) => {
  return (
    <div className="flex md:px-10 px-6 py-4 bg-blog-small">
      <article className="md:p-12 p-6 py-8 bg-transparent rounded-lg xl:text-base text-sm box-shadow-blogs shadow-lg">
        <h1 id="blog" className="md:text-4xl text-3xl text-white font-semibold mb-6">{title}</h1>
        <p className="text-yellow-400">Published on <time dateTime="2023-10-30">{publicationDate}</time> by <a href="#" className="text-white font-bold ">{author}</a></p>
        <div className=" justify-between mt-0">
          <div className="  mt-10 text-slate-200 text-sm text-justify font-semibold md:text-xl ">
            {content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="mx-auto  my-4  w-48 md:w-full     items-center">
            <img className="md:w-96   mx-auto border-2 border-black" src={imagePath} alt="" />
          </div>
        </div>
      </article>
    </div>
  );
};

export default Blogs;
