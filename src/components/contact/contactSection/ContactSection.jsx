import Contact from "../contact";
import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <div className={styles.Wrapper} id="contact">
      <h1 className={styles.Heading}>Contact</h1>
      <Contact />
    </div>
  );
};

export default ContactSection;
