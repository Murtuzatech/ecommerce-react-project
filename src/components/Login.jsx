import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data Submitted:", formData);
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Enter your details to access your account</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">

          <div className="input-group">
            <label htmlFor="email">Email Address</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-actions">

            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <a href="#forgot" className="forgot-link">
              Forgot password?
            </a>

          </div>

          <button type="submit" className="login-btn">
            Sign In
          </button>

        </form>

        <div className="login-footer">
          <p>
            Don't have an account?
            <a href="#signup"> Sign up</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;