import React,{ lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loader from "./components/Loader";
const Home = lazy(() => import('./pages/Home'));
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const UserDashboard = lazy(() => import('./pages/UserDashboard'));
const CreatePassword = lazy(() => import('./pages/CreatePassword'));
const Verification = lazy(() => import('./pages/Verification'));
const CreateListing = lazy(() => import('./pages/CreateListing'));
const SingleListing = lazy(() => import('./pages/SingleListing'));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/forgot-password" element={<ForgotPassword />}/>
            <Route path="/dashboard" element={<UserDashboard />}/>
            <Route path="/create-password" element={<CreatePassword />}/>
            <Route path="/otp-verification" element={<Verification />}/>
            <Route path="/create-listing" element={<CreateListing />}/>
            <Route path="/listing/:id" element={<SingleListing />}/>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
