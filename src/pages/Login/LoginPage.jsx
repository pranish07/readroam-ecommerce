import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import {
  guestLoginhandler,
  loginHandler,
} from "../../services/AuthService";
import { useData } from "../../contexts/DataContext";
import { useAuth } from "../../contexts/AuthContext";
export const LoginPage = () => {
  const { setIsLoggedIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggleEye, setToggleEye] = useState(false);
  const { dispatch } = useData();

  return (
    <div>
      <form
        className="login-form-container"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="login-form-innerContainer">
          <h1>Sign In</h1>
          <div className="">
            <div className="login-email">
              <input
                type="text"
                placeholder="username"
                className="input-email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="login-password relative">
              <input
                type={toggleEye ? "text" : "password"}
                placeholder="password"
                className="input-password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              {password && (
                <p
                  className="eye-icon"
                  onClick={() => setToggleEye(!toggleEye)}
                >
                  {toggleEye ? <VscEye /> : <VscEyeClosed />}
                </p>
              )}
            </div>
          </div>

          <button
            className="login-btn"
            onClick={() =>
              loginHandler(
                email,
                password,
                setIsLoggedIn,
                navigate,
                dispatch,
                location
              )
            }
          >
            Login
          </button>

          <button
            className="login-guest-btn"
            onClick={() =>
              guestLoginhandler(
                setEmail,
                setPassword,
                setIsLoggedIn,
                dispatch,
                location,
                navigate
              )
            }
          >
            Login as Guest
          </button>

          <NavLink to="/signup">Don't have account?</NavLink>
        </div>
      </form>
    </div>
  );
};
