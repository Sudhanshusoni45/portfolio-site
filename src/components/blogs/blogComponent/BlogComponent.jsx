import chromeIcon from "../../../assets/chromeIcon.webp";
import asyncImage from "../../../assets/asyncImage.webp";
import hoisting from "../../../assets/hoisting.png";
import promise from "../../../assets/promise.jpeg";
import flexiple from "../../../assets/blog/flexiple.jpg";
import BlogCard from "../blogCard/BlogCard";
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
      link: "https://blog.sudhanshusoni.tech/Working-of-a-Chrome-Extension-b5c6db2bd901487c94d9c3a752c5a372",
      image: chromeIcon,
      tech: ["React", "Redux"],
    },
    {
      name: "Interview with Flexiple",
      description: (
        <>
          I recently did an interview with Flexiple about my experiences as a
          Software Engineer.
          <br />
          <br />
          I have discussed my day-to-day as a Software Engineer, working at
          startups, assessing job offers, avoiding burnout.
          <br />
          <br />I also discuss important considerations when evaluating job
          opportunities beyond just salary, such as ESOPs, company culture and
          more.
        </>
      ),

      link: "https://flexiple.com/software-engineer/engineer-interview-sudhanshu-soni",
      image: flexiple,
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
      link: "https://sudhanshusoni.hashnode.dev/asynchronocity-in-js",
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
      link: "https://sudhanshusoni.hashnode.dev/hoisting",
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
      link: "https://sudhanshusoni.hashnode.dev/promise-in-js",
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
            // eslint-disable-next-line react/prop-types
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
