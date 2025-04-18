import { useState } from "react";
import styles from "./checkoutPage.module.css";

import CheckoutStepOne from "../components/Checkout/checkoutStepOne";
import CheckoutStepTwo from "../components/Checkout/checkoutStepTwo";
import CheckoutStepThree from "../components/Checkout/checkoutStepThree";
import OrderConfirmation from "../components/Checkout/orderConfirmation";

const tabs = ["Delivery", "Shipping", "Payment", "Confirmation"];

export default function CheckoutPage() {
  const [activeTab, setActiveTab] = useState(0);

  const [formData, setFormData] = useState({
    step1: null as null | {
      postcode: string;
      shippingMethod: string;
      deliverySlot: string | null;
    },
    step2: null as null | {
      firstName: string;
      lastName: string;
      email: string;
      phone?: string;
      city: string;
      address1: string;
      address2?: string;
      billingSame: boolean;
    },
    step3: null as null | {
      paymentMethod: "cash" | "card";
      cardNumber?: string;
      expiry?: string;
      cvc?: string;
      promoCode?: string;
      comment?: string;
    },
  });

  const goToNextStep = () => {
    if (activeTab < 3) setActiveTab((prev) => prev + 1);
  };

  const renderStep = () => {
    switch (activeTab) {
      case 0:
        return (
          <CheckoutStepOne
            onComplete={(data) => {
              setFormData((prev) => ({ ...prev, step1: data }));
              goToNextStep();
            }}
          />
        );
      case 1:
        return (
          <CheckoutStepTwo
            onComplete={(data) => {
              setFormData((prev) => ({ ...prev, step2: data }));
              goToNextStep();
            }}
            step1Data={{
              postcode: formData.step1?.postcode || "",
              deliverySlot: formData.step1?.deliverySlot || null,
            }}
          />
        );

      case 2:
        return (
          <CheckoutStepThree
            step1Data={{
              postcode: formData.step1!.postcode,
              deliverySlot: formData.step1!.deliverySlot,
            }}
            step2Data={{
              firstName: formData.step2!.firstName,
              lastName: formData.step2!.lastName,
              email: formData.step2!.email,
              phone: formData.step2!.phone,
              city: formData.step2!.city,
              address1: formData.step2!.address1,
              address2: formData.step2!.address2,
              billingSame: formData.step2!.billingSame,
            }}
            onComplete={(data) => {
              setFormData((prev) => ({ ...prev, step3: data }));
              goToNextStep();
            }}
          />
        );
      case 3:
        return (
          <OrderConfirmation
            delivery={formData.step1!}
            address={formData.step2!}
            payment={formData.step3!}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        {tabs.map((label, i) => {
          const isDisabled =
            (i === 1 && !formData.step1) ||
            (i === 2 && !formData.step2) ||
            (i === 3 && !formData.step3);

          return (
            <button
              key={label}
              className={`${styles.tab} ${
                i === activeTab ? styles.active : ""
              }`}
              onClick={() => !isDisabled && setActiveTab(i)}
              disabled={isDisabled}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className={styles.stepContent}>{renderStep()}</div>
    </div>
  );
}
