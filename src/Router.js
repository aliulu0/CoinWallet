import "./styles.css";
import App from "./components/Body/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CoinDetail from "./components/Body/CoinDetail";
import { useUser } from "./context/userContext";


function Router() {
  const {theme} = useUser();

  return (
    <BrowserRouter>
      <div className={`main ${theme === "dark" ? "bg-dark text-light": ""}`}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/coins/:coinId" element={<CoinDetail />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default Router;
