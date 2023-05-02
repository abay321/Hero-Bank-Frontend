import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Credential from "./pages/Credential";
import Account from "./pages/Account";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Register />} />
        <Route path="credential" element={<Credential />} />
        <Route path="credential" element={<Credential />} />
        <Route path="account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
