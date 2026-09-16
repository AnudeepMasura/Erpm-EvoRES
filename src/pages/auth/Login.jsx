import React, { useState } from "react";
import { go } from "../../utils/router";
import PublicNav from "../../components/common/PublicNav";
import PublicFooter from "../../components/common/PublicFooter";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    go("dashboard");
  };

  return (
    <div className="public-page">
      <PublicNav />
      <div className="auth-main">
        <div className="left-ad-panel">
          <h2>Welcome Back <br />Get Logged in to Access World's Best All-in-One Business Management Tool</h2>
        </div>

        <div className="right-signin-panel">
          <div className="signin-box">
            <h3>Client Login</h3>
            <form onSubmit={submit}>
              <div className="auth-form-group">
                <label htmlFor="username">Enter username / gmail:</label>
                <input id="username" type="text" required />
              </div>

              <div className="auth-form-group">
                <label htmlFor="password">Enter Password:</label>
                <div className="password-input">
                  <input id="password" type={showPassword ? "text" : "password"} required />
                  <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)} aria-label="Show or hide password">
                    <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`} />
                  </button>
                </div>
              </div>

              <div className="form-actions">
                <button type="button" onClick={() => alert("Password recovery flow opened.")}>Forgot pwd?</button>
              </div>

              <button className="gold-button full" type="submit">Sign in</button>
            </form>

            <div className="signup-link">
              Don't have an account? <button type="button" onClick={() => go("signup")}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <PublicFooter />
    </div>
  );
}