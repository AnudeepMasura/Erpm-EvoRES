import React from "react";

export default function WalletTable({ title, headers, rows }) {
  return (
    <div className="card table-card">
      <div className="card-header"><h3>{title}</h3></div>
      <table className="transaction-table">
        <thead><tr>{headers.map((h) => <th key={h}>{h}</th>)}</tr></thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
              <td><span className={`amount-badge ${row[3]}`}>{row[2]}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
