import React from "react";
import ReactDOM from "react-dom/client";
import PageRoutes from "./navigation/index";
import "./style/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PageRoutes />
  </React.StrictMode>
);
