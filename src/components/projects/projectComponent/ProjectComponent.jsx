import ProjectCard from "../projectCard/ProjectCard";
import rec3rd from "../../../assets/projects/rec3rd.png";
import nikeEcomm from "../../../assets/projects/nikeEcomm.png";
import styles from "./ProjectComponent.module.css";

const ProjectComponent = () => {
  const projects = [
    {
      name: "REC3RD",
      description:
        "Rec3rd is a blazing fast new age video recording tool, start recording and directly upload your screencasts to YouTube with a single click.",
      link: "https://rec3rd.co/",
      image: rec3rd,
      tech: ["Chrome Extension", "React"],
    },
    {
      name: "Nike Ecommerce",
      description:
        "Nike Ecommerce is a simple and elegant ecommerce app, i crafted it when i was just starting out my development journey.",
      link: "https://nike-ecomm.vercel.app/",
      image: nikeEcomm,
      tech: ["React", "Redux"],
    },
  ];

  return (
    <div className={styles.Wrapper}>
      <h1 className={styles.Heading}>Projects</h1>
      <div className={styles.CardWrapper}>
        {projects.map((props) => (
          <ProjectCard
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

export default ProjectComponent;
//
//
//
