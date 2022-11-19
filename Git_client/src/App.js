import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contentpage from "./components/Contentpage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserPage from "./components/UserPage";
import { VehicleForm } from "./components/VehicleForm";
import VehicleRegisterForm from "./components/VehicleRegisterForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/source" element={<Contentpage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/user/:id" element={<UserPage />} />
          <Route exact path="/user/:id/vehicleReg" element={<VehicleForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
