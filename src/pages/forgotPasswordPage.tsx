import React from "react";
import styles from "./forgotPasswordPage.module.css";
import { FaEnvelope } from "react-icons/fa";

const ForgotPasswordPage: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Left */}
      <div className={styles.left}>
        <a href="#" className={styles.back}>
          ← Back to Sign In
        </a>
        <div className={styles.content}>
          <h2>Forgot password?</h2>
          <p>
            Enter the email address you used when you joined and we’ll send you
            instructions to reset your password
          </p>

          <div className={styles.inputWrapper}>
            <FaEnvelope className={styles.icon} />
            <input type="email" placeholder="Email address" />
          </div>

          <button className={styles.reset}>Reset password</button>
          <div className={styles.help}>
            <a href="#">Need help?</a>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className={styles.right}>
        <img src="/assets/olive-oil.jpg" alt="Olive oil" />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
