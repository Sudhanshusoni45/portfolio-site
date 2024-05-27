import styles from "./ExperienceComponent.module.css";
import koinxLogo from "../../assets/experience/koinxLogo.svg";
import vmLogo from "../../assets/experience/vmLogo.svg";
import yourBrandMateLogo from "../../assets/experience/yourbrandmate_logo.jpeg";

const ExperienceComponent = () => {
  return (
    <div className={styles.Wrapper}>
      <h1 className={styles.Heading}>Where I've Worked</h1>
      <div className={styles.CompanyWrapper}>
        <div className={styles.Company}>
          <a
            href="https://valuematrix.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.ImgBackground}>
              <img className={styles.Logo} src={vmLogo} alt="" />
            </div>
          </a>
          <div className={styles.Info}>
            <h2 className={styles.Post}>Senior Software Engineer</h2>
            <p className={styles.CompanyName}>Valuematrix.ai</p>
            <p>Aug 2021 - Present</p>
          </div>
        </div>
        <div className={styles.Company}>
          <a href="https://koinx.com" target="_blank" rel="noopener noreferrer">
            <div className={styles.ImgBackground}>
              <img className={styles.Logo} src={koinxLogo} alt="" />
            </div>
          </a>
          <div className={styles.Info}>
            <h2 className={styles.Post}>Frontend Engineer</h2>
            <h2 className={styles.CompanyName}>Koinx</h2>
            <p>July 2023 - Aug 2023</p>
          </div>
        </div>
        <div className={styles.Company}>
          <a
            href="https://yourbrandmate.agency"
            target="_blank"
            rel="noopener noreferrer"
            style={{ cursor: "pointer" }}
          >
            <img className={styles.Logo} src={yourBrandMateLogo} alt="" />
          </a>
          <div className={styles.Info}>
            <h2 className={styles.Post}>Co Founder</h2>
            <h2 className={styles.CompanyName}>Your Brand Mate</h2>
            <p>Feb 2019 - Dec 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceComponent;
