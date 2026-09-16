import React from "react";
import AuthGroup from "../../components/common/AuthGroup";
import PhoneInput from "../../components/common/PhoneInput";

export default function SignupStepTwo({ buttons }) {
  return (
    <>
      <AuthGroup label="Full Name"><input placeholder="Enter full name" required /></AuthGroup>
      <AuthGroup label="Username"><input placeholder="Choose username" required /></AuthGroup>

      <div className="inline-group">
        <AuthGroup label="Date of Birth"><input type="date" required /></AuthGroup>
        <AuthGroup label="Gender">
          <select required defaultValue="">
            <option value="">Select</option><option>Male</option><option>Female</option><option>Other</option>
          </select>
        </AuthGroup>
      </div>

      <AuthGroup label="Gmail [Set as Recovery]">
        <input type="email" placeholder="recovery@gmail.com" required />
      </AuthGroup>

      <AuthGroup label="Mobile Number [Validate with OTP]">
        <div className="otp-row">
          <PhoneInput placeholder="Personal mobile number" />
          <button type="button" className="secondary-button">Send OTP</button>
        </div>
      </AuthGroup>

      <AuthGroup label="Face KYC + Recognition [Optional]">
        <input type="file" accept="image/*" />
      </AuthGroup>

      {buttons(true)}
    </>
  );
}
