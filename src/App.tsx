import Login from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { ForgotPassword } from "./pages/auth/ForgotPassword";
import { Inicio } from "./pages/user/Inicio";

import { Route, Routes, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";

import { PageLoader } from "./components/ui/PageLoader";

function App() {
  const location = useLocation();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <PageLoader />}

      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/home" element={<Inicio />} />
      </Routes>
    </>
  );
}

export default App;
