export default function ForgotPassword() {
  return (
    <div>
      {/* TODO: This should be a NavLink, and need to add a left arrow to its side */}
      <a href="">Back to sign-in</a>
      <div>
        <h1>Forgot Password</h1>
        <form action="">
          <label htmlFor="email">
            Enter the email address you used when you joined and we'll send you
            instructions to reset your password
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
          <button type="submit">Reset Password</button>
        </form>
        {/* TODO: This should be a NavLink */}
        <a href="">Need help?</a>
      </div>
    </div>
  );
}
