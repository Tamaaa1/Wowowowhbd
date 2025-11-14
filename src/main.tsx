import { Component, ReactNode, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Error Boundary Component
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            fontFamily: "system-ui, sans-serif",
            padding: "20px",
            textAlign: "center",
            backgroundColor: "#F5F5DC",
          }}
        >
          <h1 style={{ color: "#8fa378", marginBottom: "10px" }}>
            Oops! Something went wrong 😔
          </h1>
          <p style={{ color: "#666", marginBottom: "20px" }}>
            Please refresh the page to try again
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: "12px 24px",
              background: "linear-gradient(to right, #f472b6, #ec4899)",
              color: "white",
              border: "none",
              borderRadius: "999px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            🔄 Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Get root element
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Root element not found!");
  document.body.innerHTML = `
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: system-ui, sans-serif; background: #F5F5DC;">
      <div style="text-align: center;">
        <h1 style="color: #8fa378; margin-bottom: 10px;">Loading failed 😔</h1>
        <p style="color: #666;">Please refresh the page.</p>
      </div>
    </div>
  `;
} else {
  try {
    const root = createRoot(rootElement);
    root.render(
      <StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </StrictMode>,
    );
  } catch (error) {
    console.error("Failed to render app:", error);
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

// Global error handlers for debugging
window.addEventListener("error", (event) => {
  console.error("Global error:", event.error);
});

window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled rejection:", event.reason);
});
