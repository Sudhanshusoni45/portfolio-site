import styles from "./TestimonialCardComponent.module.css";

const TestimonialCardComponent = ({ heading, description, name, image }) => {
  return (
    <div className={styles.Wrapper}>
      <h1 className={styles.Heading}>{heading}</h1>
      <span className={styles.Description}>
        I'm building a SAAS providing global latency monitoring for your APIs
        and websites from edge locations around the world.
      </span>
      <div className={styles.ProfileWrapper}>
        <img src={image} alt={name} className={styles.Image} />
        <div className={styles.InfoWrapper}>
          <span className={styles.Name}>{name}</span>
          <span className={styles.Designation}> Software Engineer </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCardComponent;
