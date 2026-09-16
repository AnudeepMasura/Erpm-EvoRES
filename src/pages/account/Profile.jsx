import React from "react";

export default function Profile() {
  return (
    <section>
      <div className="page-header"><h1>User Profile</h1><p>Manage your personal credentials and avatar.</p></div>
      <div className="card"><h3>Alex Morgan</h3><p className="muted pre">Role: Administrator / Manager{"\n"}Email: alex.morgan@evores.com</p></div>
    </section>
  );
}