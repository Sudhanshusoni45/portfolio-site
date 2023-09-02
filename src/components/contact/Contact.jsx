import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.Wrapper}>
      <h1 className={styles.Heading}>Contact</h1>
      <form action="" className={styles.FormWrapper}>
        <div className={styles.InputWrapper}>
          <label className={styles.Label} htmlFor="">
            Name
          </label>
          <input type="text" className={styles.Input} />
        </div>
        <div className={styles.InputWrapper}>
          <label className={styles.Label} htmlFor="">
            Email
          </label>
          <input type="text" className={styles.Input} />
        </div>
        <div className={styles.InputWrapper}>
          <label className={styles.Label} htmlFor="">
            Firm Name
          </label>
          <input type="text" className={styles.Input} />
        </div>
        <div className={styles.InputWrapper}>
          <label className={styles.Label} htmlFor="">
            Description
          </label>
          <textarea className={styles.TextArea}></textarea>
        </div>
        <button className={styles.Btn}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
