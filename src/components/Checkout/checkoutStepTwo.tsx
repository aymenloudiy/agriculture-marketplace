import React, { useState } from "react";
import styles from "./checkoutStepTwo.module.css";
import { useCart } from "../../context/CartContext";

interface CheckoutStepTwoProps {
  onComplete: (data: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    city: string;
    address1: string;
    address2?: string;
    billingSame: boolean;
  }) => void;
  step1Data: {
    postcode: string;
    deliverySlot: string | null;
  };
}

const cities = ["Montreal", "Toronto", "Vancouver", "Ottawa"];

const CheckoutStepTwo: React.FC<CheckoutStepTwoProps> = ({
  onComplete,
  step1Data,
}) => {
  const { cart } = useCart();
  const [billingSame, setBillingSame] = useState(true);
  const [addressLine2Visible, setAddressLine2Visible] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = parseFloat((subtotal * 0.1).toFixed(2));
  const estimatedTotal = subtotal + tax;

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        {/* Step 1 Summary */}
        <div className={styles.stepDone}>
          <div className={styles.circleDone}>✓</div>
          <div>
            <h4>Delivery information</h4>
            <p>
              <strong>Postcode:</strong> {step1Data.postcode}
            </p>
            <p>
              <strong>Estimated delivery date:</strong>{" "}
              {step1Data.deliverySlot ?? "N/A"}
            </p>
          </div>
          <a className={styles.edit}>Edit</a>
        </div>

        {/* Step 2 Form */}
        <div className={styles.step}>
          <div className={styles.circleActive}>2</div>
          <h3>Shipping Address</h3>
        </div>

        <form className={styles.form}>
          <div className={styles.row}>
            <input
              required
              placeholder="First name *"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              required
              placeholder="Last name *"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className={styles.row}>
            <input
              required
              placeholder="Email address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className={styles.row}>
            <select
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">Select your city *</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <input required value="15006" readOnly placeholder="Postcode *" />
          </div>
          <input
            required
            placeholder="House / apartment number and street address *"
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
          />
          {addressLine2Visible && (
            <input
              placeholder="Additional address line (optional)"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
          )}
          <button
            type="button"
            className={styles.addLine}
            onClick={() => setAddressLine2Visible(true)}
          >
            Add address lines +
          </button>

          <div className={styles.billing}>
            <label>
              <input
                type="checkbox"
                checked={billingSame}
                onChange={() => setBillingSame(!billingSame)}
              />
              Same as delivery address
            </label>
          </div>

          <button
            type="button"
            className={styles.continueBtn}
            onClick={() => {
              if (!firstName || !lastName || !email || !city || !address1) {
                alert("Please fill in all required fields.");
                return;
              }

              onComplete({
                firstName,
                lastName,
                email,
                phone,
                city,
                address1,
                address2: addressLine2Visible ? address2 : "",
                billingSame,
              });
            }}
          >
            Continue →
          </button>
        </form>

        {/* Step 3 Placeholder */}
        <div className={styles.stepDisabled}>
          <div className={styles.circle}>3</div> Payment
        </div>
      </div>

      {/* Order Summary */}
      <div className={styles.right}>
        <div className={styles.summary}>
          <div className={styles.header}>
            <h4>Order summary</h4>
            <a href="#">Edit</a>
          </div>
          <p>
            Subtotal ({cart.length} items): <span>${subtotal.toFixed(2)}</span>
          </p>
          <p>
            Saving: <span className={styles.red}>-$0.00</span>
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
        </div>

        <div className={styles.bonusBox}>
          Congratulations! You have earned <strong>256</strong> bonuses
        </div>
      </div>
    </div>
  );
};

export default CheckoutStepTwo;
