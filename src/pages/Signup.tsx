import AltLogin from "../components/AltLogin";

export default function Signup() {
  return (
    <div>
      <div>
        <h1>Create an account</h1>
        <div>
          <p>I already have an account</p>
          {/* TODO: This should be a NavLink */}
          <a href="">Sign in</a>
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
              <label htmlFor="remember">Save password</label>
              <input type="checkbox" name="remember" id="remember" />
            </div>
            <div>
              <label htmlFor="offers">
                I would like to receive personalised commercial offers
              </label>
              <input type="checkbox" name="offers" id="offers" />
            </div>
          </div>
          <button type="submit">Create an account</button>
        </form>
        <AltLogin />
      </div>
      <div>
        <h2>Agrilinks account benefits</h2>
        <div>
          <ul>
            <li>
              <div>
                <div>
                  <i>mail icon</i>
                </div>
                <p>Subscribe to your favourite products</p>
              </div>
            </li>
            <li>
              <div>
                <div>
                  <i>gear icon</i>
                </div>
                <p>View and manage your orders and wishlist</p>
              </div>
            </li>
            <li>
              <div>
                <div>
                  <i>leaf icon</i>
                </div>
                <p>100% natural products</p>
              </div>
            </li>
            <li>
              <div>
                <div>
                  <i>percentage icon</i>
                </div>
                <p>Receive exclusive offers and discounts</p>
              </div>
            </li>
            <li>
              <div>
                <div>
                  <i>heart icon</i>
                </div>
                <p>Trustworthy products</p>
              </div>
            </li>
            <li>
              <div>
                <div>
                  <i>piechart icon</i>
                </div>
                <p>Support your local business</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
