import React from "react";

export default function DashboardHome() {
  const cards = [
    ["Today's Sales", "$14,280", "+8.2% vs yesterday", "fa-cart-shopping", "positive"],
    ["New Leads", "48", "+14 new today", "fa-user-plus", "positive"],
    ["Pending Orders", "12", "Requires action", "fa-box", "negative"],
    ["Support Tickets", "3", "Resolved quickly", "fa-headset", "positive"]
  ];

  return (
    <section>
      <div className="page-header">
        <h1>Welcome, Alex Morgan</h1>
        <p>Here is your primary quick-glance control center.</p>
      </div>

      <div className="metrics-grid">
        {cards.map(([name, value, trend, icon, type]) => (
          <div className="metric-card" key={name}>
            <div className="metric-info">
              <h3>{name}</h3>
              <p className="metric-value">{value}</p>
              <span className={`trend ${type}`}>
                <i className={`fa-solid ${type === "positive" ? "fa-arrow-up" : "fa-clock"}`} /> {trend}
              </span>
            </div>
            <div className="metric-icon gold"><i className={`fa-solid ${icon}`} /></div>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="card-header"><h3>Quick System Overview</h3></div>
        <p className="muted">Use the sidebar to inspect analytics, wallet, manage your store and employees, or access your system suite modules.</p>
      </div>
    </section>
  );
}