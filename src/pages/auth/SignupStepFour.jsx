import React from "react";
import AuthGroup from "../../components/common/AuthGroup";

export default function SignupStepFour({ buttons }) {
  return (
    <>
      <AuthGroup label="Payment Gateway Integration">
        <p className="payment-copy">Choose your payment method to complete the business setup subscription.</p>
        <select required defaultValue="">
          <option value="">Select Payment Gateway</option>
          <option>Credit / Debit Card</option><option>UPI / Net Banking</option><option>PayPal</option>
        </select>
      </AuthGroup>
      {buttons(true)}
    </>
  );
}
