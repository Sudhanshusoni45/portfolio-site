import TestimonialCardComponent from "../testimonialCardComponent/testimonialCardComponent";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const testimonials = [
    {
      heading: "Amazing!",
      description:
        "Sudhanshu is really professional and commited in his work. He’ll go above and beyond to understand the project and deliver on commitments. Forever seeker and learner.  thank him to be crucial part of YBM in his early days.",
      name: "Pranjal Mishra",
      image:
        "https://www.pranjalmishra.wtf/assets/blog/authors/Pranjal%20Mishra.png",
      designation: "Founder @YBM",
    },
    {
      heading: "Right way!",
      description:
        "Someone who will take the time and do the things the “Right way”",
      name: "Pravesh Vyas",
      image:
        "https://pbs.twimg.com/profile_images/1515299473227886592/ytqdS7ys_400x400.jpg",
      designation: "Software Engineer @Prodigal",
    },
    {
      heading: "Right way!",
      description:
        "Someone who will take the time and do the things the “Right way”",
      name: "Anmol singh bhatia",
      image:
        "https://media.licdn.com/dms/image/C5603AQFZieZETKQumQ/profile-displayphoto-shrink_800_800/0/1661393664905?e=1704326400&v=beta&t=kSaezY3MS75oI9iJ_Ii3tXPDyXvXlYVpcCl3DSNKfXY",
      designation: "Software Engineer @Plane.so",
    },
  ];

  return (
    <div className={styles.Wrapper}>
      {testimonials.map((testimonial) => (
        <TestimonialCardComponent key={testimonial.name} {...testimonial} />
      ))}
    </div>
  );
};

export default Testimonials;
