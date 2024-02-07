import chromeIcon from "../../../assets/chromeIcon.webp";
import asyncImage from "../../../assets/asyncImage.webp";
import hoisting from "../../../assets/hoisting.png";
import promise from "../../../assets/promise.jpeg";
import BlogCard from "../blogCard/blogCard";
import styles from "./BlogComponent.module.css";

const BlogComponent = () => {
  const projects = [
    {
      name: "Working of a Chrome Extension",
      description: (
        <>
          Working of a chrome extension is quite interesting i used to think if
          i can build webapps, how hard would it be to build a chrome extension,
          boy i was in for a surprise. <br />
          <br />
          In this blog i have brokedown working of a chrome extension in simple
          and easy to understand manner.
        </>
      ),
      link: "https://nike-ecomm.vercel.app/",
      image: chromeIcon,
      tech: ["React", "Redux"],
    },
    {
      name: "Asynchronocity in JavaScript",
      description: (
        <>
          You might have heard JS is asynchronous, non-blocking, single threaded
          language. Well that is not entirely true, in reality, core Js is
          synchronous blocking single threaded language. <br /> <br />
          Read the blog to find out more.
        </>
      ),
      link: "https://rec3rd.co/",
      image: asyncImage,
      tech: ["Chrome Extension", "React"],
    },
    {
      name: "Hoisting in JavaScript",
      description: (
        <>
          Hoisting is the process in which interpreter moves all the declaration
          to the top of the scope before execution. This means that we can
          access functions, variables before they have been declared in the
          source code.
          <br /> <br />
          In JavaScript Variable declrattion, initialization and usage has a
          fixed sequence.
          <br />
          <br />
          Declaration → Initialization/assignment → Usage
        </>
      ),
      link: "https://rec3rd.co/",
      image: hoisting,
      tech: ["Chrome Extension", "React"],
    },
    {
      name: "Promise in JavaScript",
      description: (
        <>
          Earlier before promise was introduced in JS asynchronous operations
          were handled using callback functions. Promises are special objects in
          JS which are used to represent the state of an asynchronous operation.
          <br />
          <br />
          Promises have three states:
          <br />
          1. Pending <br /> 2. Fulfilled <br /> 3. Rejected
        </>
      ),
      link: "https://rec3rd.co/",
      image: promise,
      tech: ["Chrome Extension", "React"],
    },
  ];

  return (
    <div className={styles.Wrapper}>
      <h1 className={styles.Heading} id="blog">
        Blogs
      </h1>
      <div className={styles.CardWrapper}>
        {projects.map((props) => (
          <BlogCard
            // name={name}
            // description={description}
            // link={link}
            key={props.name}
            {...props}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogComponent;
//
//
//
