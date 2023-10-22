import Testimonials from "../testimonials/Testimonials";
import styles from "./TestimonialsSection.module.css";

const TestimonialsSection = () => {
  return (
    <div className={styles.Wrapper}>
      <h1 className={"Heading"}>Wall of love</h1>
      <Testimonials />
    </div>
  );
};

export default TestimonialsSection;
