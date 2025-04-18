import styles from "./NewsletterSignup.module.css";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";

function NewsletterSignup() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Sign up to our newsletter</h2>
      <p className={styles.subtitle}>
        Receive our latest updates about our products & promotions
      </p>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="Your email" className={styles.input} />
        <button type="submit" className={styles.button}>
          Subscribe
        </button>
      </form>
      <div className={styles.socials}>
        <button className={styles.icon}>
          <FaInstagram />
        </button>
        <button className={styles.icon}>
          <FaFacebookF />
        </button>
        <button className={styles.icon}>
          <FaYoutube />
        </button>
        <button className={styles.icon}>
          <FaTelegramPlane />
        </button>
      </div>
    </section>
  );
}

export default NewsletterSignup;
