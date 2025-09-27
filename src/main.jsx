import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // TailwindCSS import

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ✅ Service Worker registration with auto update
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((reg) => {
        console.log("Service Worker registered:", reg);

        // When a new Service Worker is found
        reg.onupdatefound = () => {
          const newWorker = reg.installing;
          newWorker.onstatechange = () => {
            if (newWorker.state === "installed") {
              if (navigator.serviceWorker.controller) {
                console.log(
                  "A new version has been installed and is now active ✅"
                );
              } else {
                console.log(
                  "Service Worker has been installed for the first time."
                );
              }
            }
          };
        };
      })
      .catch((err) => {
        console.log("Service Worker registration failed:", err);
      });
  });
}
