// app.js — no build tools needed
import React from "https://esm.sh/react@18";

export default function App() {
  return React.createElement(
    "div",
    { className: "max-w-3xl mx-auto p-6" },
    React.createElement(
      "header",
      { className: "flex items-center justify-between mb-6" },
      React.createElement(
        "div",
        null,
        React.createElement("h1", { className: "text-3xl font-bold" }, "Universal Alignment"),
        React.createElement(
          "p",
          { className: "text-sm opacity-70" },
          "Presence • Intention • Emotion • Action • Reflection"
        )
      ),
      React.createElement(
        "span",
        { className: "text-xs px-3 py-1 rounded-full bg-black text-white" },
        new Date().toISOString().slice(0, 10)
      )
    ),
    React.createElement(
      "main",
      { className: "grid gap-4" },
      React.createElement(
        "div",
        { className: "rounded-2xl border p-4 bg-white shadow-sm" },
        React.createElement("h2", { className: "font-semibold mb-2" }, "It works 🎉"),
        React.createElement(
          "p",
          { className: "text-sm opacity-80" },
          "Your site is live on GitHub Pages and rendering React without a build step."
        )
      ),
      React.createElement(
        "a",
        {
          href: "https://swiffer1-dev.github.io/universal-alignment-app/",
          className: "inline-block w-fit px-4 py-2 rounded-xl border"
        },
        "Reload Page"
      )
    ),
    React.createElement(
      "footer",
      { className: "mt-8 text-xs opacity-60 text-center" },
      "Presence + Intention + Emotion + Action + Reflection = Alignment"
    )
  );
}
