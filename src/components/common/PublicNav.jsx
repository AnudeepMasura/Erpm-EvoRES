import React from "react";
import { go } from "../../utils/router";

export default function PublicNav({ homeTarget = "login" }) {
  return (
    <nav className="public-navbar">
      <div className="navbar-brand">EvoRES ErPM</div>
      <button className="home-icon-link" title="Home" onClick={() => go(homeTarget)}>
        <i className="fa-solid fa-house" />
      </button>
    </nav>
  );
}