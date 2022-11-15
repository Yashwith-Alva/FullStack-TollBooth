import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserPage from "./components/UserPage";
import "bootstrap/dist/css/bootstrap.min.css";
import VehicleRegisterForm from "./components/VehicleRegisterForm";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/user/:id" element={<UserPage />} />
          <Route
            exact
            path="/user/:id/vehicleRegister"
            element={<VehicleRegisterForm />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
