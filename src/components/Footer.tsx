import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.footer_content_contact}>
          <p>Got a question? Contact us</p>
        </div>
        <div className={styles.footer_content_list}>
          <h3>Company</h3>
          <ul>
            {/* TODO: All these should be NavLinks */}
            <li>
              <a href="">About company</a>
            </li>
            <li>
              <a href="">Our team</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
            <li>
              <a href="">News</a>
            </li>
          </ul>
        </div>
        <div className={styles.footer_content_list}>
          <h3>Account</h3>
          <ul>
            <li>
              <a href="">Your account</a>
            </li>
            <li>
              <a href="">Shipping rates and policies</a>
            </li>
            <li>
              <a href="">Refunds and replacements</a>
            </li>
            <li>
              <a href="">Delivery info</a>
            </li>
            <li>
              <a href="">Order tracking</a>
            </li>
            <li>
              <a href="">Taxes and fees</a>
            </li>
          </ul>
        </div>
        <div className={styles.footer_content_list}>
          <h3>Customer Service</h3>
          <ul>
            <li>
              <a href="">Payment methods</a>
            </li>
            <li>
              <a href="">Money back guarantee</a>
            </li>
            <li>
              <a href="">Product returns</a>
            </li>
            <li>
              <a href="">Support center</a>
            </li>
            <li>
              <a href="">Shipping</a>
            </li>
            <li>
              <a href="">Terms and conditions</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footer_rights}>
        <small>&copy; All rights reserved. Made by Agrilinks</small>
      </div>
    </footer>
  );
}
