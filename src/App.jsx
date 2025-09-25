import "./App.css";
import { useState } from "react";
import CookieClicker from "./components/CookieClicker.jsx";
import CatFacts from "./components/CatFacts.jsx";
import Users from "./components/Users.jsx";

function App() {
  return (
    <>
      <section className="users-section">
        <Users></Users>
      </section>
      <section className="cookie-section">
        <CookieClicker></CookieClicker>
      </section>
      <section className="facts-section">
        <CatFacts></CatFacts>
      </section>
    </>
  );
}

export default App;
