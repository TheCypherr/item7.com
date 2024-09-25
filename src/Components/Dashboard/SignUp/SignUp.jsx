import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { auth, googleProvider } from "../../../config/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  // setPersistence,
  // browserLocalPersistence,
  updateProfile,
} from "firebase/auth";
import { useFirebaseUser } from "../../../config/FirebaseContext";

const SignUp = () => {
  // use the imported firebaseContext here in signup
  const { setUser } = useFirebaseUser();
  const navigate = useNavigate();

  // handle page refresh onclick of logo
  const handlePageRefresh = () => {
    window.location.reload;
  };

  // State for username/password and error message
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  console.log(auth?.currentUser?.email);

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent form from refreshing page

    // Clear previous error messages
    setEmailError("");
    setUsernameError("");
    setPasswordError("");

    // Check if any fields are empty
    if (!email) {
      setEmailError("Input an email");
      return;
    }
    if (!username) {
      setUsernameError("Input a username");
      return;
    }
    if (!password) {
      setPasswordError("Set a password");
      return;
    }

    try {
      setLoading(true); // show loading indicator
      console.log("Creating user...");

      // await setPersistence(auth, browserLocalPersistence);

      // Create user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User created:", userCredential.user);

      // Update the user profile with the displayName (username)
      await updateProfile(user, {
        displayName: username, // username provided by user during signup
      });

      // force reload of user data after updating profile
      await user.reload();

      // Set user info in Firebase context
      setUser({
        displayName: username, // Set the display name (updated user info)
        email: user.email,
      });
      console.log("profile updated with username", username);

      setLoading(false); // dont show loading after successful signup
      setSuccess(true); // Trigger success message
      setTimeout(() => {
        navigate("/main");
      }, 2000);
      console.log("Navigated to /main");
    } catch (error) {
      setLoading(false);
      console.error("Error during signup:", error);

      // Handle Firebase auth errors
      if (error.code === "auth/email-already-in-use") {
        setEmailError("This email is already in use");
      } else if (error.code === "auth/weak-password") {
        setPasswordError("Password is too weak");
      } else {
        setUsernameError("An unexpected error occurred");
      }
    }
  };

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
    <section className="signup-wrapper home-back">
      <div className="login-overlay acct-overlay"></div>
      <div className="h-one">
        <Link to="/" onClick={handlePageRefresh}>
          <img src="./item7go.png" alt="" />
        </Link>
      </div>
      <h1>Sign up make you order sharp!</h1>
      <div className="inner-signup">
        <div className="google-signup">
          <button className="google" onClick={googleSignIn}>
            <img src="/google.png" alt="google" />
            <p> Continue with Google</p>
          </button>
        </div>
        <div className="or">
          <p>--------------- OR ---------------</p>
        </div>
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

          <div className="signup-input1">
            <div className="error-text">
              {usernameError && (
                <p style={{ color: "red" }} className="error-message1">
                  {usernameError}
                </p>
              )}
            </div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
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
                {showPassword ? <FaEye size={15} /> : <FaEyeSlash size={15} />}
              </span>
            </div>
          </div>

          <button className="signup" type="submit">
            Sign up
          </button>
          <div className="already-have">
            <p>
              Already have an account?
              <Link className="signup-link" to="/login">
                <span> Login </span>
              </Link>
            </p>
          </div>
        </form>
      </div>

      <div className="marquee-container">
        <Marquee speed={100} gradient={false} className="signup-marquee">
          Place an order now to satisfy your cravings. Your Satisfaction is our
          Utmost Priority.
        </Marquee>
      </div>

      {loading && (
        <div className="load-slide">
          <div className="load-bar"></div>
        </div>
      )}
      {success && <div className="success-popup slideIn">Successful!</div>}
    </section>
  );
};

export default SignUp;
