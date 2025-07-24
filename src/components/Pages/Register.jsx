import API from "../api";
import { useState } from "react";
import "./Auth.css";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await API.post("/register", { email, password, name: username });
      alert("Registration succeesfull");
      window.location.hfref = "./login";
    } catch (error) {
      console.log(
        "Registration failed: ",
        error.response?.data?.message || error.message
      );
      alert(error.response?.data?.message || "Registration failed");
    }
  };
}

return (
  <div className="authContainer">
    <form className="authForm" onSubmit={handleRegister}>
      <h2>Register</h2>

      <input
        type="text"
        placeholder="Username"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

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

      <button type="submit">Register</button>

      <p className="switchAuth">
        Already have an account? <a href="/login">Login</a>
      </p>
    </form>
  </div>
);

export default RegisterPage;
