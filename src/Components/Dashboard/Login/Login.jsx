import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { auth, googleProvider } from "../../../config/FirebaseConfig";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useFirebaseUser } from "../../../config/FirebaseContext";

const Login = () => {
  // use the imported firebaseContext here in signup
  const { setUser } = useFirebaseUser();

  const navigate = useNavigate();

  // State for login error messages
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent form from refreshing the page

    // Clear previous error message
    setEmailError("");
    setPasswordError("");

    // check if any field is empty
    if (!email) {
      setEmailError("Enter your email");
      return;
    }
    if (!password) {
      setPasswordError("Enter your password");
      return;
    }

    try {
      setLoading(true); // show loading slider

      // Sign in user
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Set user info and handle missing displayName
      setUser({
        displayName: user.displayName || "User", // Default to "User" if no displayName is set
        email: user.email,
      });

      setLoading(false);
      setSuccess(true);

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate("/main");
      }, 2000);
    } catch (error) {
      setLoading(false); // Stop loading on error
      console.error("Error during login:", error);

      if (error.code) {
        setEmailError("Incorrect details");
      }
    }
  };

  // To login with Google
  const googleSignIn = async () => {
    try {
      setLoading(true); // begin loading
      const googleUser = await signInWithPopup(auth, googleProvider);
      console.log("Google User:", googleUser);

      const user = googleUser.user;
      // then I store user info in context so I can use globally by doing this first
      setUser({
        displayName: user.displayName,
        email: user.email,
      });

      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        navigate("/main");
      }, 2000);
    } catch (error) {
      setLoading(false);
      console.error("Error signing up user", error);
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="login-wrapper home-back">
      <div className="login-overlay acct-overlay"></div>
      <div className="h-one">
        <Link to="/">
          <img src="./item7go.png" alt="" />
        </Link>
      </div>
      <h1>Login to continue</h1>
      <div className="inner-login">
        <div className="loginSide-two">
          <form onSubmit={handleSubmit}>
            <div className="signup-input1">
              <div className="error-text">
                {emailError && (
                  <p style={{ color: "red" }} className="error-message1">
                    {emailError}
                  </p>
                )}
              </div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>

            <div className="signup-input2">
              <div className="error-text">
                {passwordError && (
                  <p style={{ color: "red" }} className="error-message1">
                    {passwordError}
                  </p>
                )}
              </div>
              <div className="input-wrapper1">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                <span
                  className="show-password1"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FaEye size={15} />
                  ) : (
                    <FaEyeSlash size={15} />
                  )}
                </span>
              </div>
            </div>

            {/* Display error message if any error */}
            {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
            <button className="login" type="submit">
              Login &rarr;
            </button>
            <div className="in">
              <Link className="signup-link0">
                <p>Forgot password?</p>
              </Link>
            </div>
          </form>

          <div className="login-or">
            <p>--------------- OR ---------------</p>
          </div>

          <div className="google-signup signin">
            <button className="google" onClick={googleSignIn}>
              <img src="/google.png" alt="google" />
              <p> Continue with Google</p>
            </button>
          </div>

          <div className="dont-have">
            <p>
              Don't have an account?
              <Link className="signup-link" to="/signup">
                <span> Sign Up </span>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="marquee-container">
        <Marquee speed={100} gradient={false} className="login-marquee">
          Place an order now to satisfy your cravings. Your Satisfaction is our
          Utmost Priority.
        </Marquee>
      </div>

      {loading && (
        <div className="load-slide">
          <div className="load-bar"></div>
        </div>
      )}
      {success && <div className="success-popup slideIn">Login Success</div>}
    </section>
  );
};

export default Login;
