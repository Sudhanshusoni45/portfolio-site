import styles from "./TestimonialCardComponent.module.css";

const TestimonialCardComponent = ({
  heading,
  description,
  name,
  image,
  designation,
  backlink = "#",
}) => {
  return (
    <div className={styles.Wrapper}>
      <h1 className={styles.Heading}>{heading}</h1>
      <span className={styles.Description}>{description}</span>
      <a href={backlink} target="_blank" rel="noreferrer">
        <div className={styles.ProfileWrapper}>
          <img src={image} alt={name} className={styles.Image} />
          <div className={styles.InfoWrapper}>
            <span className={styles.Name}>{name}</span>
            <span className={styles.Designation}> {designation} </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default TestimonialCardComponent;
