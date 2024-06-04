
import { Suspense } from "react";
import './App.css'

//import { Outlet } from "react-router-dom";
//import { AuthProvider } from "./auth/userContext";


import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';

import LoginForm from "./components/login/LoginForm";
import HomePage from "./routes/HomePage"
import NoPage from "./routes/NoPage"

function App() {
  // Reading the "logged-in?" value
  return (
    
      <div>
        <h1>Willkommen zurück, Leute.</h1>
        <Suspense fallback={<div>loading...</div>}>

          <Routes>

            {/* Public routes */}
            <Route path="/login" element={<LoginForm />} />

            {/* Private route using PrivateRoute component */}
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<App />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="*" element={<NoPage />} />
            </Route>

          </Routes>

        </Suspense>
      </div>

  )
}

export default App
