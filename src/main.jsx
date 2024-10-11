import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// auth files
// import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-deqxx0s0o1622t80.us.auth0.com"
      clientId="YMoS3FefecSIEyDtqBXFqbwcsrGOylxK"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
