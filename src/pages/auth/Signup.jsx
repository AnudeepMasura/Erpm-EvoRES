import React, { useState } from "react";
import { go } from "../../utils/router";
import PublicNav from "../../components/common/PublicNav";
import PublicFooter from "../../components/common/PublicFooter";
import SignupStepOne from "./SignupStepOne";
import SignupStepTwo from "./SignupStepTwo";
import SignupStepThree from "./SignupStepThree";
import SignupStepFour from "./SignupStepFour";

export default function Signup() {
  const [step, setStep] = useState(1);
  const [businessType, setBusinessType] = useState("");

  const submit = (e) => {
    e.preventDefault();
    alert("Signup and setup completed successfully!");
    go("dashboard");
  };

  const buttons = (back, nextText = "Next") => (
    <div className="btn-container">
      {back ? (
        <button type="button" className="secondary-button" onClick={() => setStep(step - 1)}>Back</button>
      ) : <div />}
      {step < 4 ? (
        <button type="button" className="gold-button" onClick={() => setStep(step + 1)}>{nextText}</button>
      ) : (
        <button type="submit" className="gold-button">Complete Signup &amp; Pay</button>
      )}
    </div>
  );

  return (
    <div className="public-page">
      <PublicNav />
      <div className="auth-main">
        <div className="left-ad-panel">
          <h2>Welcome Back <br />Get Logged in to Access World's Best All-in-One Business Management Tool</h2>
        </div>

        <div className="right-signup-panel">
          <div className="signup-box">
            <h3>Client Business Setup Sign up</h3>
            <div className="step-indicator">Step {step} of 4</div>

            <form onSubmit={submit}>
              {step === 1 && <SignupStepOne businessType={businessType} setBusinessType={setBusinessType} buttons={buttons} />}
              {step === 2 && <SignupStepTwo buttons={buttons} />}
              {step === 3 && <SignupStepThree buttons={buttons} />}
              {step === 4 && <SignupStepFour buttons={buttons} />}
            </form>
          </div>
        </div>
      </div>
      <PublicFooter />
    </div>
  );
}
