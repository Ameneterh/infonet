import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider
    theme={{
      components: {
        Collapse: {
          colorPrimary: "#00b96b",
          colorPrimaryHover: "#00b96b",
          algorithm: true, // Enable algorithm
        },
        Button: {
          colorPrimary: "#2D4F2B",
          colorPrimaryHover: "#347433",
        },
      },
      token: {
        borderRadius: "5px",
        colorPrimary: "#2D4F2B",
      },
    }}
  >
    <App />
  </ConfigProvider>
);
