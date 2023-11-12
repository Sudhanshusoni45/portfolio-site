import cafe_reset from "../../../assets/about/cafe_reset.jpg";
import brahmaBrews from "../../../assets/about/brahmaBrews.jpg";

import ReactIcon from "../../../assets/about/ReactIcon.svg";
import ReduxIcon from "../../../assets/about/ReduxIcon.svg";
import TypeScriptIcon from "../../../assets/about/TypeScriptIcon.svg";

import Beer from "../../../assets/about/Beer.png";
import Pizza from "../../../assets/about/Pizza.png";
import Stars from "../../../assets/about/Stars.png";

import styles from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <div className={styles.Wrapper} id="about">
      <h1 className={`Heading`}>I only have two moods</h1>
      <div className={styles.MoodsWrapper}>
        <div className={styles.WorkMoodWrapper}>
          <img src={cafe_reset} alt="" className={styles.MoodsImg} />
          <h1 className={styles.MoodText}>Work</h1>
          {/* stack */}
          <div className={styles.StackWrapper}>
            <h2 className={styles.StackHeading}>Stack</h2>
            <div className={styles.IconWrapper}>
              <img className={styles.StackImg} src={ReactIcon} alt="react" />
              <span className={styles.StackText}>React</span>
            </div>
            <div className={styles.IconWrapper}>
              <img className={styles.StackImg} src={ReduxIcon} alt="redux" />
              <span className={styles.StackText}>Redux</span>
            </div>
            <div className={styles.IconWrapper}>
              <img
                className={styles.StackImg}
                src={TypeScriptIcon}
                alt="typeScript"
              />
              <span className={styles.StackText}>Typescript</span>
            </div>
          </div>
        </div>
        <div className={styles.ChillMoodWrapper}>
          <img src={brahmaBrews} alt="" className={styles.MoodsImg} />
          <h1 className={styles.MoodText}>Chill</h1>
          {/* stack */}
          <div className={styles.StackWrapper}>
            <h2 className={styles.StackHeading}>Stack</h2>
            <div className={styles.IconWrapper}>
              <img className={styles.StackImg} src={Beer} alt="react" />
              <span className={styles.StackText}>Chilled Beer </span>
            </div>
            <div className={styles.IconWrapper}>
              <img className={styles.StackImg} src={Pizza} alt="redux" />
              <span className={styles.StackText}>Pizza</span>
            </div>
            <div className={styles.IconWrapper}>
              <img className={styles.StackImg} src={Stars} alt="stars" />
              <span className={styles.StackText}>Great company</span>
            </div>
          </div>
        </div>
      </div>
      {/* <AboutMe /> */}
    </div>
  );
};

export default AboutSection;
