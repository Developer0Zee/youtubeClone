import { useState } from "react";
import API from "../api"

import "./Auth.css";
function LoginPage() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
    const response = await API.post('/login', { email, password });
    localStorage.setItem('token', response.data);
    // Redirect to home page or fetch user data
    window.location.href = '/';
  } catch (error) {
    console.error("Login failed:", error.response?.data?.message || error.message);
    alert(error.response?.data?.message || "Login failed");
  }
};
  };
  return (
    <div className="authContainer">
      <form className="authForm" onSubmit={handleLogin}>
        <h2>Login </h2>

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p className="switchAuth">
          Don't have an account ?<a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
