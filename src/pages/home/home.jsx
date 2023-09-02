import { useEffect } from "react";
import { useRef } from "react";
import styles from "./home.module.css";
import Starback from "starback";
import useWindowDimensions from "../../hooks/useWindowWidth";
import ProjectComponent from "../../components/projects/projectComponent/projectComponent";
import Contact from "../../components/contact/contact";

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
        <div className={styles.Wrapper}>
          <div className={styles.Navbar}>
            <span className={styles.NavbarText}>Projects</span>
            <span className={styles.NavbarText}>Contacts</span>
          </div>
          <h1 className={styles.NameHeading}>sudhanshu</h1>
          <p className={styles.Note}>
            Hi, I am Sudhanshu I am a Freelance Frontend Developer cum wizard!
          </p>
        </div>
        {/* <CanvasComponent /> */}
        <ProjectComponent />
        <Contact />
      </div>
    </>
  );
};

export default Home;
