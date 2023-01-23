import React, { useState, useEffect } from "react";
import Footer from "../components/HomePageComponents/Footer";
import Navbar from "../components/HomePageComponents/Navbar";
import LoginForm from "../components/LoginPageComponents/LoginForm";
import SignUpForm from "../components/LoginPageComponents/SignUpForm";
import { useSelector } from "react-redux";
import LoadingModal from "../components/LoginPageComponents/LoadingModal";
import SnackBar from "../components/LoginPageComponents/SnackBar";
import { useNavigate } from "react-router-dom";
import Redirecting from "../components/LoginPageComponents/Redirecting";

function LoginPage() {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState(false);
  const { isLoading, message, isLogin } = useSelector((store) => store.auth);
  useEffect(() => {
    if (isLogin) {
      navigate("/dashboard");
    }
  }, [isLogin]);

  return (
    <>
      {isLogin ? (
        <Redirecting />
      ) : (
        <div className="login__body">
          <Navbar />
          {/* login form or signup form */}
          {!newUser ? (
            <LoginForm setNewUser={setNewUser} />
          ) : (
            <SignUpForm setNewUser={setNewUser} />
          )}
          {/* isLoading Modal */}
          {isLoading && <LoadingModal />}
          {/* snackbar if login fails*/}
          {!isLoading && message != "" && <SnackBar />}
          <Footer />
        </div>
      )}
    </>
  );
}

export default LoginPage;
