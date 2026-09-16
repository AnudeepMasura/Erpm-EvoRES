import React from "react";

export default function ModulePage({ title, description, cardTitle, cardText }) {
  return (
    <section>
      <div className="page-header">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="card">
        <h3>{cardTitle}</h3>
        <p className="muted pre">{cardText}</p>
      </div>
    </section>
  );
}
