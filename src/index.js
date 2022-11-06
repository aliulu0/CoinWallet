import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Router from "./Router";
import CoinProvider from "./context/coinContext";
import UserProvider from "./context/userContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <UserProvider>
      <CoinProvider>
        <Router />
      </CoinProvider>
    </UserProvider>
  </StrictMode>
);
