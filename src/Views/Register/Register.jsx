import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {

    // Empty fields check
    if (
      fullName.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      alert("Please fill all fields!");
      return;
    }

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email!");
      return;
    }

    // Password validation
    if (password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    // Create user data
    const userData = {
      fullName: fullName,
      email: email,
      password: password
    };

    // Save registration data
    localStorage.setItem(
      "easyRentRegisteredUser",
      JSON.stringify(userData)
    );

    alert("Registration Successful!");

    // Clear fields
    setFullName("");
    setEmail("");
    setPassword("");

    // Go to Login page
    navigate("/login");
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <h1>Create Account</h1>

        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

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
          onClick={handleRegister}
        >
          Register
        </button>

      </div>

    </div>
  );
}

export default Register;