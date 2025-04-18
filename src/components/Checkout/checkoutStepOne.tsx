import React, { useState } from "react";
import styles from "./CheckoutStepOne.module.css";
import { useCart } from "../../context/CartContext";

interface CheckoutStepOneProps {
  onComplete: (data: {
    postcode: string;
    shippingMethod: string;
    deliverySlot: string | null;
  }) => void;
}

const shippingOptions = [
  { id: "courier", label: "Courier delivery", price: 26.5 },
  { id: "store", label: "Pickup from store", price: 0 },
  { id: "local", label: "Local shipping", price: 21.4 },
];

const deliverySlots = {
  Monday: ["12.00 - 16:00", "16.00 - 20:00"],
  Tuesday: ["09.00 - 12:00", "12.00 - 16:00"],
  Wednesday: ["09.00 - 12:00", "16.00 - 20:00"],
  Thursday: ["12.00 - 16:00", "16.00 - 20:00"],
};

const CheckoutStepOne: React.FC<CheckoutStepOneProps> = ({ onComplete }) => {
  const [postcode, setPostcode] = useState("");
  const [confirmedPostcode, setConfirmedPostcode] = useState<string | null>(
    null
  );
  const [selectedMethod, setSelectedMethod] = useState("courier");
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const { cart } = useCart();

  const handlePostcodeSubmit = () => {
    if (postcode.trim()) {
      setConfirmedPostcode(postcode.trim());
    }
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = parseFloat((subtotal * 0.1).toFixed(2));
  const estimatedTotal = subtotal + tax;

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.step}>
          <div className={styles.circleActive}>1</div>
          <div>
            <h3>Delivery Information</h3>
            <p>
              Add your Postcode to see the delivery and collection options
              available in your area.
            </p>
            {confirmedPostcode ? (
              <div className={styles.confirmedPostcode}>
                <strong>{confirmedPostcode}</strong>{" "}
                <button onClick={() => setConfirmedPostcode(null)}>Edit</button>
              </div>
            ) : null}
          </div>
        </div>

        {!confirmedPostcode && (
          <>
            <label className={styles.label}>Postcode</label>
            <div className={styles.inputGroup}>
              <input
                type="text"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                placeholder="e.g. H1 1AG"
              />
              <button
                className={styles.calculate}
                onClick={handlePostcodeSubmit}
              >
                Calculate cost and availability →
              </button>
            </div>
          </>
        )}

        {confirmedPostcode && (
          <>
            <h4>Choose shipping method</h4>
            <div className={styles.shippingMethods}>
              {shippingOptions.map((option) => (
                <label key={option.id} className={styles.shippingOption}>
                  <input
                    type="radio"
                    name="shipping"
                    value={option.id}
                    checked={selectedMethod === option.id}
                    onChange={() => setSelectedMethod(option.id)}
                  />
                  {option.label}{" "}
                  <span className={styles.price}>
                    {option.price > 0 ? `$${option.price.toFixed(2)}` : "Free"}
                  </span>
                </label>
              ))}
            </div>

            {selectedMethod === "courier" && (
              <div className={styles.slots}>
                <p>Choose a courier delivery time convenient for you:</p>
                <div className={styles.slotGrid}>
                  {Object.entries(deliverySlots).map(([day, slots]) => (
                    <div key={day}>
                      <strong>{day}</strong>
                      <div className={styles.slotGroup}>
                        {slots.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => setSelectedSlot(slot)}
                            className={`${styles.slotBtn} ${
                              selectedSlot === slot ? styles.activeSlot : ""
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button
              className={styles.continueBtn}
              onClick={() => {
                if (!selectedMethod) {
                  alert("Please select a shipping method.");
                  return;
                }

                if (selectedMethod === "courier" && !selectedSlot) {
                  alert("Please select a delivery slot.");
                  return;
                }

                onComplete({
                  postcode: confirmedPostcode!,
                  shippingMethod: selectedMethod,
                  deliverySlot: selectedSlot,
                });
              }}
            >
              Continue →
            </button>
          </>
        )}

        <div className={styles.stepDisabled}>
          <div className={styles.circle}>2</div> Shipping Address
        </div>
        <div className={styles.stepDisabled}>
          <div className={styles.circle}>3</div> Payment
        </div>
      </div>

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

export default CheckoutStepOne;
