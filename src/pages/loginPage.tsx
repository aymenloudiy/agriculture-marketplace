import React, { useState } from "react";
import styles from "./loginPage.module.css";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      {/* Left */}
      <div className={styles.left}>
        <h2>Welcome back</h2>
        <p>
          Do not have an account? <a href="#">Create an account</a>
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
          </label>

          <div className={styles.options}>
            <div>
              <input type="checkbox" />
              <label>Remember for 30 days</label>
            </div>
            <a href="#">Forgot password?</a>
          </div>

          <button
            type="submit"
            className={styles.signIn}
            onClick={() => navigate("/")}
          >
            Sign in
          </button>

          <div className={styles.divider}>or continue with</div>

          <div className={styles.social}>
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
        <img src="/src/assets/loginbg.jpg" alt="Olive oil bottle" />
      </div>
    </div>
  );
};

export default LoginPage;
