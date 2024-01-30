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
          height: width > 480 ? 4500 : 4600,
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
            <a href="#about">
              <span className={styles.NavbarText}>About</span>
            </a>
            <a href="#contact">
              <span className={styles.NavbarText}>Contacts</span>
            </a>
          </div>
          <h1 className={styles.NameHeading}>Sudhanshu</h1>
          <p className={styles.Note}>
            Hi, I am Sudhanshu a Frontend Developer wizard!
          </p>
        </div>
        <ProjectComponent />
        {/* <AboutSection /> */}
        {/* <TestimonialsSection /> */}
        <ContactSection />
      </div>
    </>
  );
};

export default Home;
