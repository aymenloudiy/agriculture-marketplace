import React from "react";
import styles from "./orderConfirmation.module.css";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router";

interface OrderConfirmationProps {
  delivery: {
    postcode: string;
    shippingMethod: string;
    deliverySlot: string | null;
  };
  address: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    city: string;
    address1: string;
    address2?: string;
    billingSame: boolean;
  };
  payment: {
    paymentMethod: "cash" | "card";
    promoCode?: string;
    comment?: string;
  };
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  delivery,
  address,
  payment,
}) => {
  const navigate = useNavigate();
  const orderId = Math.floor(Math.random() * 900000 + 100000).toString();

  const deliveryAddress = `${address.address1}${
    address.address2 ? ", " + address.address2 : ""
  }, ${address.city}, ${delivery.postcode}`;
  const deliveryTime = delivery.deliverySlot
    ? `Next available slot: ${delivery.deliverySlot}`
    : "Scheduled delivery";

  const paymentMethod =
    payment.paymentMethod === "card" ? "Card payment" : "Cash on delivery";

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <FaCheckCircle className={styles.icon} />
        <div>
          <p className={styles.orderId}>Order #{orderId}</p>
          <h2>Thank you for your order!</h2>
        </div>
        <a className={styles.track} href="#">
          Track order
        </a>
      </div>

      <hr className={styles.divider} />

      <div className={styles.details}>
        <div>
          <h4>Delivery</h4>
          <p>{deliveryAddress}</p>
        </div>
        <div>
          <h4>Time</h4>
          <p>{deliveryTime}</p>
        </div>
        <div>
          <h4>Payment</h4>
          <p>{paymentMethod}</p>
        </div>
      </div>

      <div className={styles.footer}>
        <p>
          Need help? <a href="#">Contact us</a>
        </p>
        <button className={styles.homeBtn} onClick={() => navigate("/")}>
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
