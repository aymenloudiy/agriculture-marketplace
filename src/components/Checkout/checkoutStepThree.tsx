import React, { useState } from "react";
import styles from "./checkoutStepThree.module.css";
import { useCart } from "../../context/CartContext";

interface CheckoutStepThreeProps {
  onComplete: (data: {
    paymentMethod: "cash" | "card";
    cardNumber?: string;
    expiry?: string;
    cvc?: string;
    promoCode?: string;
    comment?: string;
  }) => void;
  step1Data: {
    postcode: string;
    deliverySlot: string | null;
  };
  step2Data: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    city: string;
    address1: string;
    address2?: string;
    billingSame: boolean;
  };
}

const CheckoutStepThree: React.FC<CheckoutStepThreeProps> = ({
  onComplete,
  step1Data,
  step2Data,
}) => {
  const { cart, setCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "card">("card");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [promoVisible, setPromoVisible] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [comment, setComment] = useState("");

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = parseFloat((subtotal * 0.1).toFixed(2));
  const estimatedTotal = subtotal + tax;

  const handleSubmit = () => {
    if (!acceptTerms) {
      alert("Please accept the Terms and Conditions.");
      return;
    }

    if (paymentMethod === "card" && (!cardNumber || !expiry || !cvc)) {
      alert("Please fill in all required card details.");
      return;
    }
    setCart([]);

    setCardNumber("");
    setExpiry("");
    setCvc("");
    setPromoCode("");
    setComment("");
    setAcceptTerms(false);
    setPaymentMethod("card");

    onComplete({
      paymentMethod,
      cardNumber: paymentMethod === "card" ? cardNumber : undefined,
      expiry: paymentMethod === "card" ? expiry : undefined,
      cvc: paymentMethod === "card" ? cvc : undefined,
      promoCode: promoVisible ? promoCode : undefined,
      comment,
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        {/* Step 1 Summary */}
        <div className={styles.stepDone}>
          <div className={styles.circleDone}>✓</div>
          <div>
            <h4>Delivery Information</h4>
            <p>
              <strong>Postcode:</strong> {step1Data.postcode}
            </p>
            {step1Data.deliverySlot && (
              <p>
                <strong>Estimated delivery date:</strong>{" "}
                {step1Data.deliverySlot}
              </p>
            )}
          </div>
          <a className={styles.edit}>Edit</a>
        </div>

        {/* Step 2 Summary */}
        <div className={styles.stepDone}>
          <div className={styles.circleDone}>✓</div>
          <div>
            <h4>Shipping Address</h4>
            <p>
              {step2Data.firstName} {step2Data.lastName}
            </p>
            <p>{step2Data.email}</p>
            {step2Data.phone && <p>{step2Data.phone}</p>}
            <p>
              {step2Data.city} {step1Data.postcode}
            </p>
            <p>{step2Data.address1}</p>
            {step2Data.address2 && <p>{step2Data.address2}</p>}
          </div>
          <a className={styles.edit}>Edit</a>
        </div>

        {/* Step 3 */}
        <div className={styles.step}>
          <div className={styles.circleActive}>3</div>
          <h3>Payment</h3>
        </div>

        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="payment"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={() => setPaymentMethod("cash")}
            />
            Cash on delivery
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="card"
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
            />
            Credit or debit card
          </label>
        </div>

        {paymentMethod === "card" && (
          <>
            <input
              placeholder="Card number"
              className={styles.input}
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <div className={styles.row}>
              <input
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
              <input
                placeholder="CVC"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
              />
            </div>
          </>
        )}

        <button
          className={styles.togglePromo}
          onClick={() => setPromoVisible(!promoVisible)}
        >
          ⓘ Add a promo code or a gift card
        </button>

        {promoVisible && (
          <input
            placeholder="Enter your code..."
            className={styles.input}
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
        )}

        <textarea
          placeholder="Additional comments"
          className={styles.textarea}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <label className={styles.terms}>
          <input
            type="checkbox"
            checked={acceptTerms}
            onChange={() => setAcceptTerms(!acceptTerms)}
          />
          I accept the <a href="#">Terms and Conditions</a>
        </label>

        <button
          className={styles.payBtn}
          onClick={handleSubmit}
          disabled={!acceptTerms}
        >
          Pay ${estimatedTotal.toFixed(2)}
        </button>
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

export default CheckoutStepThree;
