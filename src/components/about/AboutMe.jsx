import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles.Wrapper}>
      <h1 className={`Heading ${styles.AboutMeHeading}`}>About me</h1>
      <div className={styles.DescriptionCard}>
        <p className={styles.Description}>
          Hi i am Sudhanshu soni, a Software Engineer with a knack to craft
          beautiful web apps.
          <br /> <br />I have a unique blend of experiences that makes me stand
          out, when in college co founded a creative agency and worked there for
          about 2 years i was mostly looking into design and tech. <br /> <br />
          After that i moved on to working with a very early stage startup koinx
          as Frontend Engineer and worked there for a year, and now i am here.
          about 2 years i was mostly looking into design and tech. <br /> <br />
          After that i moved on to working with a very early stage startup koinx
          as Frontend Engineer and worked there for a year, and now i am here.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
