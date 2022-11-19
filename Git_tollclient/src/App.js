import "./App.css";
import SourcePage from "./components/SourcePage";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminPage from "./components/AdminPage";
import AdminInit from "./components/AdminInit";
import ScanForm from "./components/ScanForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/sourcepage" element={<SourcePage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/admin/:id" element={<AdminInit />} />
          <Route exact path="/admin/:id/Stats" element={<AdminPage />} />
          <Route exact path="/admin/:id/Tolls" element={<ScanForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
