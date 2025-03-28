export default function Login() {
  return (
    <div>
      <div>
        <h1>Welcome Back</h1>
        <div>
          <p>Do not have an account?</p>
          {/* TODO: this should be a NavLink */}
          <a href="">Create an account</a>
        </div>
        <form action="">
          <div>
            <label htmlFor="email">email:</label>
            <input type="text" name="email" id="email" placeholder="email" />
          </div>
          <div>
            <label htmlFor="password">password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </div>
          <div>
            <div>
              <label htmlFor="remember">Remember for 30 days</label>
              <input
                type="checkbox"
                name="remember"
                id="remember"
                placeholder="remember"
              />
            </div>
            <div>
              {/* TODO: This should be a NavLink */}
              <a href="">Forgot Password?</a>
            </div>
          </div>
        </form>
        <p>Or Continue with</p>
        <ul>
          <li>
            <div>
              <i>google icon</i>
              <p>Google</p>
            </div>
          </li>
          <li>
            <div>
              <i>facebook icon</i>
              <p>Facebook</p>
            </div>
          </li>
          <li>
            <div>
              <i>apple icon</i>
              <p>Apple</p>
            </div>
          </li>
        </ul>
        {/* TODO: This should be a NavLink */}
        <a href="">Need help?</a>
      </div>
      <div>
        <img src="" alt="Login-image" />
      </div>
    </div>
  );
}
