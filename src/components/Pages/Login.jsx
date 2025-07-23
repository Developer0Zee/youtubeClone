import { useState } from "react";

import "./Auth.css"
function LoginPage() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Logging in with", { email, password });
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
