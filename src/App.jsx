import React, { useEffect, useState } from "react";
import { getPage } from "./utils/router";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import DashboardLayout from "./components/layout/DashboardLayout";

export default function App() {
  const [page, setPage] = useState(getPage());

  useEffect(() => {
    const onHashChange = () => setPage(getPage());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (page === "login") return <Login />;
  if (page === "signup") return <Signup />;

  return <DashboardLayout page={page} />;
}