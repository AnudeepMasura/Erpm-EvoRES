import React from "react";

export default function AuthGroup({ label, children }) {
  return (
    <div className="auth-form-group">
      <label>{label}</label>
      {children}
    </div>
  );
}