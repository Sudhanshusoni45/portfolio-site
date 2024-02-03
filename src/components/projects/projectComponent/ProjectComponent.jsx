import ProjectCard from "../projectCard/ProjectCard";
import styles from "./ProjectComponent.module.css";

const ProjectComponent = () => {
  const projects = [
    {
      name: "Nike Ecommerce",
      description: "",
      link: "https://nike-ecomm.vercel.app/",
    },
    {
      name: "Nike Tube",
      description: "",
      link: "https://nike-tube.vercel.app/",
    },
    {
      name: "Simple Notes",
      description: "",
      link: "https://simplenotes.vercel.app/",
    },
    {
      name: "Maya Ui",
      description: "",
      link: "https://maya-ui.vercel.app/",
    },
  ];

  return (
    <div className={styles.Wrapper}>
      <h1 className={styles.Heading}>Projects</h1>
      <div className={styles.CardWrapper}>
        {projects.map(({ name, description, link }) => (
          <ProjectCard
            name={name}
            description={description}
            link={link}
            key={name}
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
