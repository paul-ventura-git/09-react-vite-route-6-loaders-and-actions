
import { Suspense } from "react";
import './App.css'

import { Outlet } from "react-router-dom";
import { AuthProvider } from "./auth/userContext";

import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';

import LoginForm from "./components/login/LoginForm";
import HomePage from "./routes/HomePage"

function App() {
  return (
    <AuthProvider>
      <div>
        <h1>Willkommen zurück, Leute.</h1>
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<LoginForm />} />

            {/* Private route using PrivateRoute component */}
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/account" element={<HomePage />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </AuthProvider>
  )
}

export default App
