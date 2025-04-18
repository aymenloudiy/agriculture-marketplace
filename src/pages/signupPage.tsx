import React, { useState } from "react";
import styles from "./signupPage.module.css";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import {
  FaGoogle,
  FaFacebookF,
  FaApple,
  FaHeart,
  FaClock,
  FaLeaf,
  FaEnvelope,
  FaPercentage,
  FaCog,
} from "react-icons/fa";

const SignupPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.container}>
      {/* Left */}
      <div className={styles.left}>
        <h2>Create an account</h2>
        <p>
          I already have an account <a href="#">Sign in</a>
        </p>

        <form className={styles.form}>
          <label>
            Email
            <input type="email" placeholder="Email" />
          </label>

          <label className={styles.passwordField}>
            Password
            <div className={styles.passwordInput}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={styles.eye}
              >
                {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </button>
            </div>
            <small>Passwords must be at least 8 characters.</small>
          </label>

          <label className={styles.checkbox}>
            <input type="checkbox" />
            Save the password
          </label>

          <label className={styles.checkbox}>
            <input type="checkbox" />I would like to receive personalized
            commercial offers from CartZilla by email.
          </label>

          <button type="submit" className={styles.submit}>
            Create an account
          </button>

          <div className={styles.divider}>or continue with</div>

          <div className={styles.oauth}>
            <button>
              <FaGoogle /> Google
            </button>
            <button>
              <FaFacebookF /> Facebook
            </button>
            <button>
              <FaApple /> Apple
            </button>
          </div>

          <div className={styles.help}>
            <a href="#">Need help?</a>
          </div>
        </form>
      </div>

      {/* Right */}
      <div className={styles.right}>
        <h3>Agrilink account benefits</h3>
        <div className={styles.grid}>
          <div className={styles.card}>
            <FaEnvelope /> Subscribe to your favorite products
          </div>
          <div className={styles.card}>
            <FaCog /> View and manage your orders and wishlist
          </div>
          <div className={styles.card}>
            <FaLeaf /> 100% Natural products
          </div>
          <div className={styles.card}>
            <FaPercentage /> Receive exclusive offers and discounts
          </div>
          <div className={styles.card}>
            <FaHeart /> The products are trustworthy
          </div>
          <div className={styles.card}>
            <FaClock /> Support your local business
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
