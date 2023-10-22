import AboutMe from "../AboutMe";
import cafe_reset from "../../../assets/about/cafe_reset.jpg";
import styles from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <div className={styles.Wrapper}>
      <img src={cafe_reset} alt="" className={styles.Image} />
      <AboutMe />
    </div>
  );
};

export default AboutSection;
