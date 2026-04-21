import React, { useState } from "react";
import { useAuth } from "../hooks/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    try {
      setLoading(true);

      const loginResponse = await fetch("http://localhost:8080/voters/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!loginResponse.ok) {
        throw new Error("Invalid credentials");
      }

      const token = await loginResponse.text();
      login(token);

      const roleResponse = await fetch("http://localhost:8080/admin/voters", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (roleResponse.ok) navigate("/admin");
      else navigate("/voter");

    } catch (err) {
      setErrorMessage(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">

      {/* LEFT SIDE */}
      <div className="login-center">
        <div className="login-card">

          <h2>🔐 Welcome Back</h2>
          <p className="subtitle">Login to continue voting securely</p>

          {errorMessage && <p className="error">{errorMessage}</p>}

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <input
                type="email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email Address</label>
            </div>

            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Password</label>

              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "🚀 Login"}
            </button>
          </form>
<p className="footer-text">
  Don’t have an account?{" "}
  <span
    className="link"
    onClick={() => navigate("/register")}
  >
    Register
  </span>
</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">
        <img src="/image.png" alt="Voting Illustration" />
      </div>

    </div>
  );
};

export default LoginPage;