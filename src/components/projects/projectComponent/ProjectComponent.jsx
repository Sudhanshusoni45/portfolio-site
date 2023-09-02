import ProjectCard from "../projectCard/projectCard";
import styles from "./ProjectComponent.module.css";

const ProjectComponent = () => {
  return (
    <div className={styles.Wrapper}>
      <h1 className={styles.Heading}>Projects</h1>
      <div className={styles.CardWrapper}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectComponent;
