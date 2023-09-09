import TestimonialCardComponent from "../testimonialCardComponent/testimonialCardComponent";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const testimonials = [
    {
      heading: "Amazing!",
      description: "",
      name: "Pranjal Mishra",
      image:
        "https://www.pranjalmishra.wtf/assets/blog/authors/Pranjal%20Mishra.png",
    },
    {
      heading: "Amazing!",
      description: "",
      name: "Pranjal Mishra",
      image:
        "https://www.pranjalmishra.wtf/assets/blog/authors/Pranjal%20Mishra.png",
    },
    {
      heading: "Amazing!",
      description: "",
      name: "Pranjal Mishra",
      image:
        "https://www.pranjalmishra.wtf/assets/blog/authors/Pranjal%20Mishra.png",
    },
    {
      heading: "Amazing!",
      description: "",
      name: "Pranjal Mishra",
      image:
        "https://www.pranjalmishra.wtf/assets/blog/authors/Pranjal%20Mishra.png",
    },
    {
      heading: "Amazing!",
      description: "",
      name: "Pranjal Mishra",
      image:
        "https://www.pranjalmishra.wtf/assets/blog/authors/Pranjal%20Mishra.png",
    },
  ];

  return (
    <div className={styles.Wrapper}>
      {testimonials.map(({ heading, description, name, image }) => (
        <TestimonialCardComponent
          heading={heading}
          description={description}
          name={name}
          image={image}
          key={name}
        />
      ))}
    </div>
  );
};

export default Testimonials;
