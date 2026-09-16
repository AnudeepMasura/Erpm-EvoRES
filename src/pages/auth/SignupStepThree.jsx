import React from "react";

export default function SignupStepThree({ buttons }) {
  return (
    <>
      <div className="terms-box">
        <strong>Terms &amp; Conditions</strong><br /><br />
        Please read these terms and conditions carefully before using EvoRES ErPM.
        By signing up, you agree to comply with and be bound by the following terms of use.
        All business data provided remains strictly confidential and secure under standard operational compliance.
      </div>
      <label className="terms-check">
        <input id="terms" type="checkbox" required /> I accept the Terms &amp; Conditions
      </label>
      {buttons(true)}
    </>
  );
}
