import { useEffect } from "react";
import { useRef } from "react";
import styles from "./home.module.css";
import Starback from "starback";
import useWindowDimensions from "../../hooks/useWindowWidth";

const Home = () => {
  const { width, height } = useWindowDimensions();
  const CanvasComponent = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;

        new Starback(canvas, {
          type: "dot",
          quantity: 60,
          direction: 180,
          backgroundColor: "#070708",
          randomOpacity: true,
          starSize: [0, 1],
          speed: [0, 0.3],
          width,
          height,
          starColor: "grey",
        });
      }
    }, []);

    return <canvas className={styles.Canvas} ref={canvasRef} />;
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Navbar}>
        <span className={styles.NavbarText}>Projects</span>
        <span className={styles.NavbarText}>Contacts</span>
      </div>
      <CanvasComponent />
      <h1 className={styles.NameHeading}>sudhanshu</h1>
      <p className={styles.Note}>
        Hi, I am Sudhanshu I am a Freelance Frontend Developer cum wizard!
      </p>
    </div>
  );
};

export default Home;
