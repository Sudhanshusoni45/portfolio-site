import email from "../../assets/contact/email.png";
// import phone from "../../assets/contact/phone.png";
import location from "../../assets/contact/location.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import styles from "./Contact.module.css";
import toast from "react-hot-toast";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Response submitted, you will hear from me soon!", {
      duration: 6000,
    });
  };
  return (
    <div className={styles.Wrapper}>
      <div className={styles.ContactInfoWrapper}>
        <div>
          <h1 className={styles.Heading}>Have an awesome project?</h1>
          <h1 className={styles.Heading}>Let's Discuss</h1>
        </div>
        <div className={styles.InfoWrapper}>
          {/* <div className={styles.IconWrapper}>
            <img className={styles.Icon} src={phone} alt="phone" />
            <span>+918770306377</span>
          </div> */}
          <div className={styles.IconWrapper}>
            <img className={styles.Icon} src={email} alt="email" />
            <span>sudhanshusoni45@gmail.com</span>
          </div>
          <div className={styles.IconWrapper}>
            <img className={styles.Icon} src={location} alt="location" />
            <span>Bengaluru, India</span>
          </div>
        </div>
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
            <FaSquareGithub fontSize={"3.2rem"} style={{ cursor: "pointer" }} />
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
        </div>
      </div>
      <div>
        <form action="" className={styles.FormWrapper} onSubmit={handleSubmit}>
          <div className={styles.InputWrapper}>
            <label className={styles.Label} htmlFor="name">
              Name
            </label>
            <input type="text" className={styles.Input} required />
          </div>
          <div className={styles.InputWrapper}>
            <label className={styles.Label} htmlFor="email">
              Email
            </label>
            <input type="email" className={styles.Input} required />
          </div>
          <div className={styles.InputWrapper}>
            <label className={styles.Label} htmlFor="phone">
              Phone no
            </label>
            <input type="number" className={styles.Input} required />
          </div>
          <div className={styles.InputWrapper}>
            <label className={styles.Label} htmlFor="firmName">
              Firm Name
            </label>
            <input type="text" className={styles.Input} />
          </div>
          <div className={styles.InputWrapper}>
            <label className={styles.Label} htmlFor="description">
              Description
            </label>
            <textarea className={styles.TextArea} required></textarea>
          </div>
          <button type="submit" className={styles.Btn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
