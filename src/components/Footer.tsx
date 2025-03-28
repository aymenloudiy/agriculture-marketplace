import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div>
          <p>Got a question? Contact us</p>
        </div>
        <div>
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
        <div>
          <h3>Account</h3>
          <ul>
            <li>Your account</li>
            <li>Shipping rates and policies</li>
            <li>Refunds and replacements</li>
            <li>Delivery info</li>
            <li>Order tracking</li>
            <li>Taxes and fees</li>
          </ul>
        </div>
        <div>
          <h3>Customer Service</h3>
          <ul>
            <li>Payment methods</li>
            <li>Money back guarantee</li>
            <li>Product returns</li>
            <li>Support center</li>
            <li>Shipping</li>
            <li>Terms and conditions</li>
          </ul>
        </div>
      </div>
      <div>
        <small>&copy; All rights reserved. Made by Agrilinks</small>
      </div>
    </footer>
  );
}
