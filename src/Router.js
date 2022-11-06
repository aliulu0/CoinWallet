import "./styles.css";
import App from "./components/Body/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Router() {
  return (
    <BrowserRouter>
      <div className="main">
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default Router;
