
import { Suspense } from "react";
import './App.css'

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <div>
      <h1>Willkommen zurück, Leute.</h1>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
    </>
  )
}

export default App
