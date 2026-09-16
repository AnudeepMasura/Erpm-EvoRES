import React, { useState } from "react";
import WalletTable from "./WalletTable";

export default function Wallet() {
  const [walletTab, setWalletTab] = useState("added");
  const [filter, setFilter] = useState("Day");
  const [bars, setBars] = useState([35,65,50,85,45,90,70]);

  const walletFilter = (value) => {
    setFilter(value);
    setBars(bars.map(() => Math.floor(Math.random() * 75) + 20));
  };

  const rows = walletTab === "added"
    ? [["Oct 24, 2026","Deposit","+$10,000.00","positive"],["Oct 18, 2026","Withdrawal","-$2,500.00","negative"],["Oct 05, 2026","Deposit","+$15,000.00","positive"]]
    : [["Oct 25, 2026","Ad Campaigns","-$1,420.00","negative"],["Oct 20, 2026","Inventory Restock","-$4,800.00","negative"],["Oct 12, 2026","SaaS Subscriptions","-$650.00","negative"]];

  return (
    <section>
      <div className="page-header">
        <h1>Wallet</h1>
        <p>Manage your funds, track spending, and review transaction ledgers.</p>
      </div>

      <div className="wallet-top-card">
        <div><h3>Available Balance</h3><div className="wallet-balance-amount">$48,290.00</div></div>
        <button className="add-funds-btn" onClick={() => alert("Add Funds gateway opened.")}>
          <i className="fa-solid fa-plus-circle" /> Add Funds
        </button>
      </div>

      <div className="card">
        <div className="card-header">
          <h3>Amount Spent Overview</h3>
          <div className="card-actions">
            {["Day","Week","Month","Year","Till Date"].map((f) => (
              <button key={f} className={`filter-btn ${filter === f ? "active" : ""}`} onClick={() => walletFilter(f)}>{f}</button>
            ))}
          </div>
        </div>
        <div className="chart-placeholder">{bars.map((height, i) => <div className="bar" key={i} style={{height: `${height}%`}} />)}</div>
      </div>

      <div className="wallet-toggle-tabs">
        <button className={`wallet-tab-btn ${walletTab === "added" ? "active" : ""}`} onClick={() => setWalletTab("added")}>Funds Added / Withdrawal</button>
        <button className={`wallet-tab-btn ${walletTab === "spent" ? "active" : ""}`} onClick={() => setWalletTab("spent")}>Funds Spent</button>
      </div>

      <WalletTable
        title={walletTab === "added" ? "Funds Added / Withdrawal Ledger" : "Funds Spent Ledger"}
        headers={["Date", walletTab === "added" ? "Type" : "Category", walletTab === "added" ? "Amount" : "Spent"]}
        rows={rows}
      />
    </section>
  );
}

