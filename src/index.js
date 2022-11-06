import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Router from "./Router";
import CoinProvider from "./context/coinContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CoinProvider>
      <Router />
    </CoinProvider>
  </StrictMode>
);
