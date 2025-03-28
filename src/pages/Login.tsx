import AltLogin from "../components/AltLogin";

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
              <input type="checkbox" name="remember" id="remember" />
            </div>
            <div>
              {/* TODO: This should be a NavLink */}
              <a href="">Forgot Password?</a>
            </div>
          </div>
          <button type="submit">Sign-in</button>
        </form>
        <AltLogin></AltLogin>
      </div>
      <div>
        <img src="" alt="Login-image" />
      </div>
    </div>
  );
}
