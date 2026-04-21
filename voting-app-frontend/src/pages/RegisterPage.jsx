import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";
import "./../styles/registration.css";

const VoterRegistration = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAdmin: false,
  });

  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setStatus("error");
      setMessage("Passwords do not match");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/voters/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          isAdmin: false,
        }),
      });

      if (!response.ok) throw new Error("Registration failed");

      const data = await response.json();

      setStatus("success");
      setMessage("🎉 Registration Successful!");

      if (data.token) login(data.token);

      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (err) {
      setStatus("error");
      setMessage(err.message || "Something went wrong");
    }
  };

  return (
    <div className="register-wrapper">

      {/* LEFT SIDE FORM */}
      <div className="register-center">
        <div className="register-card">

          <h2>🗳️ Create Account</h2>
          <p className="subtitle">Join the secure voting system</p>

          {status === "error" && <div className="error">{message}</div>}
          {status === "success" && <div className="success">{message}</div>}

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <input
                name="name"
                placeholder=" "
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <label>Full Name</label>
            </div>

            <div className="input-group">
              <input
                name="email"
                type="email"
                placeholder=" "
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <label>Email Address</label>
            </div>

            <div className="input-group">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder=" "
                value={formData.password}
                onChange={handleInputChange}
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

            <div className="input-group">
              <input
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder=" "
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
              <label>Confirm Password</label>
            </div>

            <button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Creating Account..." : "🚀 Register"}
            </button>

          </form>

          <p className="footer-text">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Login</span>
          </p>

        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="register-right">
        <img src="/image.png" alt="Voting Illustration" />
      </div>

    </div>
  );
};

export default VoterRegistration;