import styles from "./ContactSection.module.css";
import Contact from "../Contact";

const ContactSection = () => {
  return (
    <div className={styles.Wrapper} id="contact">
      <h1 className={styles.Heading}>Contact</h1>
      <Contact />
    </div>
  );
};

export default ContactSection;
