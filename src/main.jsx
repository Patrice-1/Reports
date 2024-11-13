import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux"; // Import Provider
import store from "./redux/store"; // Import the Redux store

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {" "}
      {/* Wrap your app with Provider */}
      <App />
    </Provider>
  </StrictMode>
);