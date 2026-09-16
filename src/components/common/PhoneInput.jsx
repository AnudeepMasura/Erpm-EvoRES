import React from "react";

const countryCodes = [
  ["+91", "India (+91)"],
  ["+1", "USA/Canada (+1)"],
  ["+44", "UK (+44)"],
  ["+61", "Australia (+61)"],
  ["+971", "UAE (+971)"],
  ["+65", "Singapore (+65)"],
  ["+81", "Japan (+81)"],
  ["+49", "Germany (+49)"]
];

export default function PhoneInput({ placeholder = "Mobile number", required = true }) {
  return (
    <div className="phone-input">
      <select aria-label="Country code" defaultValue="+91">
        {countryCodes.map(([code, label]) => (
          <option key={code} value={code}>{label}</option>
        ))}
      </select>
      <input type="tel" placeholder={placeholder} required={required} />
    </div>
  );
}