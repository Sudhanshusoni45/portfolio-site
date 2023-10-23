import { useEffect } from "react";
import { useRef } from "react";
import styles from "./home.module.css";
import Starback from "starback";
import useWindowDimensions from "../../hooks/useWindowWidth";
import ContactSection from "../../components/contact/contactSection/ContactSection";
import TestimonialsSection from "../../components/testimonials/testimonialsSection/TestimonialsSection";
import ShootingStars from "../../components/shootingStars/ShootingStars";
import AboutSection from "../../components/about/AboutSection/AboutSection";

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
          // backgroundColor: "#070708",
          backgroundColor: "#161618",
          randomOpacity: true,
          starSize: [0, 1],
          speed: [0, 0.3],
          // -17 just to get rid of x scrollbar
          width: width - 17,
          height: 5000,
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
            <span className={styles.NavbarText}>About</span>
            <a href="#contact">
              <span className={styles.NavbarText}>Contacts</span>
            </a>
          </div>
          <h1 className={styles.NameHeading}>sudhanshu</h1>
          <p className={styles.Note}>
            Hi, I am Sudhanshu I am a Freelance Frontend Developer cum wizard!
          </p>
        </div>
        {/* <ProjectComponent /> */}
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </>
  );
};

export default Home;
