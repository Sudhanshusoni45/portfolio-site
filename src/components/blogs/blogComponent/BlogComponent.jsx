import BlogCard from "../blogCard/blogCard";
import styles from "./BlogComponent.module.css";

const BlogComponent = () => {
  const projects = [
    {
      name: "REC3RD",
      description: "",
      link: "https://rec3rd.co/",
      //   image: rec3rd,
      tech: ["Chrome Extension", "React"],
    },
    {
      name: "Nike Ecommerce",
      description: "",
      link: "https://nike-ecomm.vercel.app/",
      //   image: nikeEcomm,
      tech: ["React", "Redux"],
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
