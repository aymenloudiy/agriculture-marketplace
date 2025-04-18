import styles from "./shoppingCart.module.css";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router";

const FREE_SHIPPING_THRESHOLD = 187;
const TAX_RATE = 0.1;

const ShoppingCart: React.FC = () => {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = parseFloat((subtotal * TAX_RATE).toFixed(2));
  const estimatedTotal = subtotal + tax;
  const amountLeft = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.breadcrumb}>Home &gt; Shop &gt; Cart</div>
        <h1>Shopping cart</h1>
        <p>
          Buy <strong>${amountLeft.toFixed(0)}</strong> more to get{" "}
          <strong>Free Shipping</strong>
        </p>
        <div className={styles.progress}>
          <div
            className={styles.fill}
            style={{
              width: `${Math.min(
                (subtotal / FREE_SHIPPING_THRESHOLD) * 100,
                100
              )}%`,
            }}
          />
        </div>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>
                  <button onClick={clearCart} className={styles.clearBtn}>
                    Clear cart
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className={styles.productCell}>
                    <img src={item.image} alt={item.name} />
                    <div>
                      <div>{item.name}</div>
                    </div>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td className={styles.quantity}>
                    <button onClick={() => updateQuantity(item.id, -1)}>
                      -
                    </button>
                    {item.quantity}
                    <button onClick={() => updateQuantity(item.id, 1)}>
                      +
                    </button>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button onClick={() => removeItem(item.id)}>×</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <a className={styles.back} href="/category/olive-oil">
          ← Continue shopping
        </a>
      </div>

      <div className={styles.right}>
        <div className={styles.summary}>
          <h3>Order summary</h3>
          <p>
            Subtotal ({cart.length} items): <span>${subtotal.toFixed(2)}</span>
          </p>
          <p>
            Saving: <span>-$0.00</span>
          </p>
          <p>
            Tax collected: <span>${tax.toFixed(2)}</span>
          </p>
          <p>
            Shipping: <span>Calculated at checkout</span>
          </p>
          <p className={styles.total}>
            Estimated total: <span>${estimatedTotal.toFixed(2)}</span>
          </p>
          <button
            className={styles.checkout}
            onClick={() => navigate("/checkout")}
          >
            Proceed to checkout →
          </button>
          <p className={styles.bonus}>
            Create an account and get <strong>239</strong> bonuses
          </p>
        </div>

        <div className={styles.promo}>
          <details>
            <summary>Apply promo code</summary>
            <input placeholder="Enter code..." />
          </details>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
