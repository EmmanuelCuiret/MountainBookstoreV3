import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Login.css";
import axiosInstance from "../axiosInstance";

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  //const baseURL = "http://localhost:3000/";
  const baseURL = "https://mountainbookstorev2-1.onrender.com/";

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!login.trim() || !password.trim()) {
      setIsSubmitting(true);
      return;
    }

    try {
      const response = await axiosInstance.post(baseURL + "login", {
        login,
        password,
      });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      } else {
        console.error("No token received!");
      }
    } catch (error) {
      console.error("Connection error: ", error);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid credentials. Please try again.",
        confirmButtonColor: "#4836ad",
      });
    }
  };

  return (
    <div className="login">
      <form className="event-card-no-scale" onSubmit={handleLogin}>
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        {isSubmitting && !login.trim() && (
          <p className="error-message">Username is required</p>
        )}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSubmitting && !password.trim() && (
          <p className="error-message">Password is required</p>
        )}
        <div className="button-group">
          <button className="event-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
