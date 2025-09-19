import React, { useState, useEffect } from "react";
import "./header.css"


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // Lưu Theme từ localStorage

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.body.classList.add("dark")
    }
  }, []);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", dark);
    }else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <header>
      <div className="logo">LOGO</div>
      {/* <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#">Mẫu danh thiếp</a>
        <a href="#">Liên hệ</a>
        <a href="#">Về chúng tôi</a>
        <a href="#">Tin tức</a>
      </nav> */}
      <div
        id="menu-toggle"
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
      <button onClick={() => setDark(!dark)} className="toggle-theme">
          {dark ? "☀️ Light" : "🌙 Dark"}
      </button>

    </header>
  );
}
