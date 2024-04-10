import React, { useState} from "react";
import { Link, useHistory } from "react-router-dom";
import "./login.css";
import { auth } from "../../firebase";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  
  
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="logIn">
      <Link className="image" to="/">
        <img
          className="logIn-logo"
          src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="logIn_container">
        <h1>Sign-in</h1>
        <form>
          <h5> E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
           
          />
          <h5> Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login_signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE conditions of Use &
          Sale. Please see our Cookies Noties and our Interest-Based Ads Notice.
        </p>
        <button className="LogIn-Register" onClick={register}>Create your Amazon Account</button>
      </div>
    </div>
  );
};

export default LogIn;
