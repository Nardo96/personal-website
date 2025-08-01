"use client";
import React, { useEffect } from "react";

export default function NavBar() {
    const handleToggleDark = () => {
    const html = document.documentElement
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("darkMode", "disabled");
    } else {
      html.classList.add("dark");
        localStorage.setItem("darkMode", "enabled");
    }
  }
    return (
        <nav className="justify-content justify-end gap-16 pt-8 font-[family-name:var(--font-geist-sans)] flex flex-row pe-16 ps-16 dark:bg-gray-800 dark:text-white">
          <button className="me-auto px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-600"
          onClick={handleToggleDark}
          type="button"></button>
          <a href="/about/">About Me</a>
          <a href="/translations/">J-E Translations</a>
          <a href="/projects/">Code Projects</a>
        </nav>
    )
}