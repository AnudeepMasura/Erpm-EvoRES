import React, { useState } from "react";
import { go } from "../../utils/router";
import { mainNavItems, moduleItems } from "../../data/navigation";
import DashboardHome from "../../pages/dashboard/DashboardHome";
import SimpleModule from "../../pages/modules/SimpleModule";
import ManageStore from "../../pages/modules/ManageStore";
import Wallet from "../../pages/modules/Wallet";
import Profile from "../../pages/account/Profile";
import Announcements from "../../pages/account/Announcements";
import Terms from "../../pages/account/Terms";
import CustomerData from "../../pages/modules/CustomerData";
import Products from "../../pages/modules/Products";
import Inventory from "../../pages/modules/Inventory";
import ManageEmployees from "../../pages/modules/ManageEmployees";
import Recruitment from "../../pages/modules/Recruitment";
import Analytics from "../../pages/modules/Analytics";
import SaleHistory from "../../pages/modules/SaleHistory";
import Operating from "../../pages/modules/Operating";
import HR from "../../pages/modules/HR";
import CustomerSupport from "../../pages/modules/CustomerSupport";
import FinanceSuite from "../../pages/modules/FinanceSuite";
import Settings from "../../pages/modules/Settings";


export default function DashboardLayout({ page }) {
  const [collapsed, setCollapsed] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [modulesOpen, setModulesOpen] = useState(true);

  const logout = () => {
    alert("Logged out successfully!");
    go("login");
  };

  const renderPage = () => {
    if (page === "dashboard") return <DashboardHome />;
    if (page === "manage-store") return <ManageStore />;
    if (page === "wallet") return <Wallet />;
    if (page === "profile") return <Profile />;
    if (page === "announcements") return <Announcements />;
    if (page === "tc") return <Terms />;
    const pageComponents = {
      "customer-data": <CustomerData />,
      products: <Products />,
      inventory: <Inventory />,
      "manage-employees": <ManageEmployees />,
      recruitment: <Recruitment />,
      analytics: <Analytics />,
      "sale-history": <SaleHistory />,
      operating: <Operating />,
      hr: <HR />,
      "customer-support": <CustomerSupport />,
      "finance-suite": <FinanceSuite />,
      settings: <Settings />
    };

    return pageComponents[page] || <SimpleModule page={page} />;
  };

  return (
    <div className="app-shell">
      <header className="navbar">
        <div className="logo">EvoRES ErPM</div>
        <div className="nav-right">
          <div className="user-profile" onClick={() => setProfileOpen(!profileOpen)}>
            <i className="fa-solid fa-bell" />
            <div className="avatar">EV</div>
            {profileOpen && (
              <div className="profile-dropdown" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => go("profile")}><i className="fa-solid fa-user" /> Profile</button>
                <button onClick={() => go("announcements")}><i className="fa-solid fa-bullhorn" /> Announcements</button>
                <button onClick={() => go("tc")}><i className="fa-solid fa-file-contract" /> T&amp;C</button>
                <button className="danger" onClick={logout}><i className="fa-solid fa-right-from-bracket" /> Logout</button>
              </div>
            )}
          </div>
          <button className="hamburger-btn" onClick={() => setCollapsed(!collapsed)} aria-label="Toggle Menu">
            <i className="fa-solid fa-bars" />
          </button>
        </div>
      </header>

      <div className="app-container">
        <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
          <ul className="sidebar-menu">
            {mainNavItems.map(([id, label, icon]) => (
              <li key={id}>
                <button className={`nav-link ${page === id ? "active" : ""}`} onClick={() => go(id)}>
                  <i className={`fa-solid ${icon}`} />
                  <span>{label}</span>
                </button>
              </li>
            ))}

            <li className="module-menu">
              <button
                className={`nav-link modules-toggle ${modulesOpen ? "active-parent" : ""}`}
                onClick={() => setModulesOpen(!modulesOpen)}
              >
                <i className="fa-solid fa-layer-group" />
                <span>View Modules</span>
                <i className={`fa-solid ${modulesOpen ? "fa-chevron-up" : "fa-chevron-down"} module-chevron`} />
              </button>

              {modulesOpen && (
                <ul className="module-submenu">
                  {moduleItems.map(([id, label, icon]) => (
                    <li key={id}>
                      <button className={`nav-link module-link ${page === id ? "active" : ""}`} onClick={() => go(id)}>
                        <i className={`fa-solid ${icon}`} />
                        <span>{label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          <div className="sidebar-footer">
            <button className="logout-sidebar-btn" onClick={logout}>
              <i className="fa-solid fa-right-from-bracket" />
              <span>Logout</span>
            </button>
          </div>
        </aside>

        <main className="main-content" onClick={() => profileOpen && setProfileOpen(false)}>
          {renderPage()}
        </main>
      </div>
    </div>
  );
}