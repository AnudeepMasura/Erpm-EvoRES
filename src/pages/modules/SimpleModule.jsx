import React from "react";
import { simplePages } from "../../data/navigation";

export default function SimpleModule({ page }) {
  const data = simplePages[page] || ["Page Not Found", "The requested page does not exist.", "Unavailable", "Please select a page from the sidebar."];

  return (
    <section>
      <div className="page-header">
        <h1>{data[0]}</h1>
        <p>{data[1]}</p>
      </div>
      <div className="card">
        <h3>{data[2]}</h3>
        <p className="muted pre">{data[3]}</p>
      </div>
    </section>
  );
}