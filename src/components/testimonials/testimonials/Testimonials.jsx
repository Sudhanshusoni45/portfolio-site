import TestimonialCardComponent from "../testimonialCardComponent/TestimonialCardComponent";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const testimonials = [
    {
      heading: "Professional!",
      description:
        "Sudhanshu is really professional and commited in his work. He’ll go above and beyond to understand the project and deliver on commitments. Forever seeker and learner.  thank him to be crucial part of YBM in his early days.",
      name: "Pranjal Mishra",
      image:
        "https://www.pranjalmishra.wtf/assets/blog/authors/Pranjal%20Mishra.png",
      backlink: "https://www.pranjalmishra.wtf/",
      designation: "Founder @YourBrandMate",
    },
    {
      heading: "Right way!",
      description:
        "Someone who will take the time and do the things the “Right way”",
      name: "Pravesh Vyas",
      image:
        "https://pbs.twimg.com/profile_images/1515299473227886592/ytqdS7ys_400x400.jpg",
      designation: "Software Engineer @Prodigal",
      backlink: "https://www.linkedin.com/in/vp5h/",
    },
    {
      heading: "Impressive!",
      description:
        "Sudhanshu is someone I'd like to collaborate with more. We've worked on a few projects together, and his skills are impressive. The quality of his work is extraordinary, as he puts in effort and ideas as if he's building the project for himself.",
      name: "Anmol singh bhatia",
      image:
        "https://media.licdn.com/dms/image/C5603AQFZieZETKQumQ/profile-displayphoto-shrink_800_800/0/1661393664905?e=1704326400&v=beta&t=kSaezY3MS75oI9iJ_Ii3tXPDyXvXlYVpcCl3DSNKfXY",
      designation: "Software Engineer @Plane.so",
      backlink: "https://www.linkedin.com/in/anmolbhatia1001/",
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
