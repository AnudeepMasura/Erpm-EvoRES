import React from "react";
import AuthGroup from "../../components/common/AuthGroup";
import PhoneInput from "../../components/common/PhoneInput";

export default function SignupStepOne({ businessType, setBusinessType, buttons }) {
  return (
    <>
      <AuthGroup label="Business Type">
        <select value={businessType} onChange={(e) => setBusinessType(e.target.value)} required>
          <option value="">Select business type</option>
          <option>Sole Proprietor</option><option>LLP</option><option>Pvt Ltd</option>
          <option>Public</option><option>Org</option><option>NGO</option><option>Others</option>
        </select>
      </AuthGroup>

      {businessType === "Others" && (
        <AuthGroup label="Custom Business Type">
          <input placeholder="Enter your business type" required />
        </AuthGroup>
      )}

      <AuthGroup label="Business Name"><input placeholder="Enter business name" required /></AuthGroup>
      <AuthGroup label="Business Mail"><input type="email" placeholder="business@company.com" required /></AuthGroup>

      <AuthGroup label="Business Mobile Number">
        <PhoneInput placeholder="Business mobile number" />
      </AuthGroup>

      <AuthGroup label="HQ Address">
        <input placeholder="Street Address" required />
        <div className="inline-group">
          <input placeholder="City / Town" required />
          <input placeholder="State / Province" required />
        </div>
        <div className="inline-group">
          <input placeholder="Pincode / Zipcode" required />
          <input placeholder="Country" required />
        </div>
      </AuthGroup>

      {buttons(false)}
    </>
  );
}
