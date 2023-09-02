import styles from "./projectCard.module.css";

const ProjectCard = () => {
  return (
    <div className={styles.Wrapper}>
      <h1 className={styles.Heading}>Ecomm</h1>
      <span className={styles.Description}>
        I'm building a SAAS providing global latency monitoring for your APIs
        and websites from edge locations around the world. Have you ever
        wondered how fast your API is in any part of the world? Planetfall
        allows you to find out and monitor it continuously.
      </span>
    </div>
  );
};

export default ProjectCard;
