import styles from "./ShootingStars.module.css";

const ShootingStars = () => {
  const shootingStars = [];

  for (let i = 0; i < 7; i++) {
    shootingStars.push(<div key={i} className={styles.shooting_star}></div>);
  }

  return <div className={styles.night}>{shootingStars}</div>;
};

export default ShootingStars;
