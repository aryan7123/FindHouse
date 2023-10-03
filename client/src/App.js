import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import UserDashboard from "./pages/UserDashboard";
import CreatePassword from "./pages/CreatePassword";
import Verification from "./pages/Verification";
import CreateListing from "./pages/CreateListing";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/forgot-password" element={<ForgotPassword />}/>
          <Route path="/dashboard" element={<UserDashboard />}/>
          <Route path="/create-password" element={<CreatePassword />}/>
          <Route path="/otp-verification" element={<Verification />}/>
          <Route path="/create-listing" element={<CreateListing />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
