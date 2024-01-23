import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Loader from "./components/Loader";
import './App.css'

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Sales = lazy(() => import("./pages/Sales"));
const Clients = lazy(() => import("./pages/Clients"));
const Logout = lazy(() => import("./pages/Logout"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/sales" element={<Sales />} />
          <Route path="/admin/clients" element={<Clients />} />
          <Route path="/admin/logout" element={<Logout />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
