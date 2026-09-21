import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Empty fields check
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter email and password!");
      return;
    }

    // Basic email check
    if (!email.includes("@")) {
      alert("Please enter a valid email!");
      return;
    }

    // Password check
    if (password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    // Save login information
    const userData = {
      email: email,
      isLoggedIn: true
    };

    localStorage.setItem(
      "easyRentUser",
      JSON.stringify(userData)
    );

    alert("Login Successful!");

    // Clear fields
    setEmail("");
    setPassword("");

    // Go to home page
    navigate("/");
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <h1>Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;