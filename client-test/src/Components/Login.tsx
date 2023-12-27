import React from "react";
import { useState } from "react";
import '../index.css';
import { Typography } from "antd";
import Categories from "./Categories.tsx";
import styles from "/Users/paulaviloria/Documents/expense-tracker-api/client-test/src/styles/login.module.css";



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [token, setToken] = useState("");
    
    let login = async (e) => {
      e.preventDefault();
      try {
        let res = await fetch("http://localhost:8080/api/users/login", {
          method: "POST",
          headers: {"content-type": "application/json"},
          body: JSON.stringify({
            "email": email,
            "password": password,
          }),
        });
        let resJson = await res.json();
        console.log(resJson)
        if (res.status === 200) {
          setPassword("");
          setMessage("Logged in succesfully, " + email);
          setToken(resJson.token);
          
        } else if(res.status === 401){
          setMessage("Invalid email/password");
        } else {
          setMessage("Something went wrong")
        }
      } catch (err) {
        console.log(err);
      }
    };
    return (
      <div>

          {token ? (
            <Categories token={token} email={email} />
          ) : (
            <div className={styles.login}>
                    <div className="container">
                    <div id="form">
                    <h1>Login</h1>
                    <form onSubmit={login}>
                        <label> Username:</label>
                        <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" required />
                        <br />
                        <label> Password:</label>
                        <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <div className="centeredButtonContainer">
                      <button type="submit">Login</button>
                    </div>
                    </form>
                    <div className="message">{message ? <p>{message}</p> : null}</div>
                    </div>
                    </div>
            </div>
          )}
        </div>
    )

}

export default Login;