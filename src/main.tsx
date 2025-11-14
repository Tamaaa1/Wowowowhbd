import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Get root element
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Root element not found!");
  document.body.innerHTML = `
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: system-ui, sans-serif; background: #F5F5DC;">
      <div style="text-align: center; padding: 20px;">
        <h1 style="color: #8fa378; margin-bottom: 10px;">Loading failed 😔</h1>
        <p style="color: #666; margin-bottom: 20px;">Please refresh the page.</p>
        <button onclick="window.location.reload()" style="padding: 12px 24px; background: linear-gradient(to right, #f472b6, #ec4899); color: white; border: none; border-radius: 999px; cursor: pointer; font-size: 16px; font-weight: 600; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          🔄 Refresh
        </button>
      </div>
    </div>
  `;
} else {
  try {
    const root = createRoot(rootElement);
    root.render(<App />);
    console.log("✅ App rendered successfully");
  } catch (error) {
    console.error("❌ Failed to render app:", error);
    rootElement.innerHTML = `
      <div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: system-ui, sans-serif; flex-direction: column; padding: 20px; text-align: center; background: #F5F5DC;">
        <h1 style="color: #8fa378; margin-bottom: 10px;">Failed to load 😔</h1>
        <p style="color: #666; margin-bottom: 20px;">Please refresh the page or check your internet connection.</p>
        <button onclick="window.location.reload()" style="padding: 12px 24px; background: linear-gradient(to right, #f472b6, #ec4899); color: white; border: none; border-radius: 999px; cursor: pointer; font-size: 16px; font-weight: 600; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          🔄 Refresh
        </button>
      </div>
    `;
  }
}

// Global error handlers for debugging in production
window.addEventListener("error", (event) => {
  console.error("❌ Global error:", event.error);
});

window.addEventListener("unhandledrejection", (event) => {
  console.error("❌ Unhandled rejection:", event.reason);
});
