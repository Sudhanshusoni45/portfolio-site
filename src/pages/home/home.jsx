import { useEffect } from "react";
import { useRef } from "react";
import styles from "./home.module.css";
import Starback from "starback";
import ContactSection from "../../components/contact/contactSection/ContactSection";
// import TestimonialsSection from "../../components/testimonials/testimonialsSection/TestimonialsSection";
import ShootingStars from "../../components/shootingStars/ShootingStars";
// import AboutSection from "../../components/about/AboutSection/AboutSection";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import ProjectComponent from "../../components/projects/projectComponent/ProjectComponent";
import BlogComponent from "../../components/blogs/blogComponent/BlogComponent";
import { FaLinkedin, FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Home = () => {
  const { width } = useWindowDimensions();
  const CanvasComponent = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;

        new Starback(canvas, {
          type: "dot",
          quantity: 70,
          direction: 180,
          backgroundColor: "#161618",
          randomOpacity: true,
          starSize: [0, 1],
          speed: [0, 0.3],
          // -17 just to get rid of x scrollbar
          width: width > 480 ? width - 17 : width,
          height: document.body.scrollHeight + 200,
          starColor: "white",
        });
      }
    }, []);

    return <canvas className={styles.Canvas} ref={canvasRef} />;
  };

  return (
    <>
      <CanvasComponent />
      <div>
        <ShootingStars />
        <div className={styles.Wrapper}>
          <div className={styles.Navbar}>
            <a href="https://blog.sudhanshusoni.tech">
              <span className={styles.NavbarText}>Blog</span>
            </a>
            <a href="#contact">
              <span className={styles.NavbarText}>Contact</span>
            </a>
          </div>
          <h1 className={styles.NameHeading}>Sudhanshu</h1>

          <p className={styles.Note}>Hi, I am Sudhanshu Frontend Engineer</p>
          <div className={styles.SocialsWrapper}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/sudhanshusoni__"
            >
              <FaSquareXTwitter
                fontSize={"3.2rem"}
                style={{ cursor: "pointer" }}
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Sudhanshusoni45"
            >
              <FaSquareGithub
                fontSize={"3.2rem"}
                style={{ cursor: "pointer" }}
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/sudhanshusoni_"
            >
              <FaInstagramSquare
                fontSize={"3.2rem"}
                style={{ cursor: "pointer" }}
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/sudhanshu-soni/"
            >
              <FaLinkedin fontSize={"3.2rem"} style={{ cursor: "pointer" }} />
            </a>
          </div>
        </div>
        <ProjectComponent />
        <BlogComponent />
        {/* <AboutSection /> */}
        {/* <TestimonialsSection /> */}
        <ContactSection />
      </div>
    </>
  );
};

export default Home;
